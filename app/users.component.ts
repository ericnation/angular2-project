import {Component, OnInit} from "angular2/core";
import {UsersService} from './users.service';
import {RouterLink} from 'angular2/router';

@Component({
  selector: 'users',
  templateUrl: 'app/users.component.html',
  providers: [UsersService],
  directives: [RouterLink]

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
}