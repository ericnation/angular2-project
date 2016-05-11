import {Component, OnInit} from "angular2/core";
import {UsersService} from './users.service.ts';
import {RouterLink} from 'angular2/router';
import {SpinnerComponent} from "./../shared/spinner.component.ts";

@Component({
  selector: 'users',
  templateUrl: 'users.component.html',
  providers: [UsersService],
  directives: [RouterLink, SpinnerComponent]

})

export class UsersComponent implements OnInit{
  isLoading = true;
  users: any[];

  constructor(private _service: UsersService) {

  }

  ngOnInit(){
    this._service.getUsers()
      .subscribe(users => {
        this.isLoading = false;
        this.users = users;
      });
  }
  
  deleteUser(user) {
    if(confirm('Are you sure you want to delete ' + user.name + '?')) {
      var index = this.users.indexOf(user);
      this.users.splice(index,1);

      this._service.deleteUser(user.id)
          .subscribe(null,
            err => {
              alert('Could not delete the user.');
              this.users.splice(index,0,user);
            })
    }
  }
}