import {Component} from "angular2/core";
import {UsersService} from './users.service';
import {RouterLink} from 'angular2/router';

@Component({
  selector: 'users',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="loader-wrapper" *ngIf="isLoading">
            <span class="loader">
              <i class="fa fa-spin fa-spinner fa-3x"></i>
            </span>
          </div>
          
          <h1>Users</h1>
          <a [routerLink]="['NewUser']" class="btn btn-primary new-user-btn">Add User</a>
          <table class="table table-bordered table-striped">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            <tr *ngFor="#user of users">
              <td>{{user.name}}</td>
              <td>{{user.email}}</td>
              <td><a href="" class="edit-link"><i class="fa fa-edit"></i> </a></td>
              <td><a href="" class="remove-link"><i class="fa fa-remove"></i> </a></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  `,
  providers: [UsersService],
  directives: [RouterLink]

})

export class UsersComponent implements OnInit{
  isLoading = true;
  users: any[];

  constructor(private _usersService: UsersService) {

  }

  ngOnInit(){
    this._usersService.getUsers()
        .subscribe(users => {
          this.isLoading = false;
          this.users = users;
        });
  }
}