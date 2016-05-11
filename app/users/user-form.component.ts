import {Component, OnInit} from "angular2/core";
import {Validators, ControlGroup, FormBuilder} from "angular2/common";
import {generalFormValidators} from "./../shared/formValidators";
import {CanDeactivate, Router, RouteParams} from "angular2/router";
import {UsersService} from './users.service';
import {User} from './user';

@Component({
  selector: 'user-form',
  templateUrl: 'app/users/user-form.component.html',
  providers: [UsersService]
})

export class UserFormComponent implements OnInit, CanDeactivate{

  form: ControlGroup;
  title: string;
  user = new User();

  constructor(
    fb: FormBuilder,
    private _router: Router,
    private _routeParams: RouteParams,
    private _usersService: UsersService
  ){
    this.form = fb.group({
      name: ['', Validators.required],
      email: ['', generalFormValidators.email],
      phone: [],
      address: fb.group({
          street: [],
          suite: [],
          city: [],
          zipcode: []
      })
    });
  }

  ngOnInit(){
    var id = this._routeParams.get("id");

    this.title = id ? "Edit User" : "New User";

    if (!id)
      return;

    this._usersService.getUser(id)
      .subscribe(
        user => this.user = user,
        response => {
          if (response.status == 404) {
            this._router.navigate(['NotFound']);
          }
        });
  }

  routerCanDeactivate(next, previous) {
    if(this.form.dirty) {
      return confirm('Are you sure you want to navigate away from this page?');
    }
    return true;
  }

  save() {
    var result;

    if(this.user.id) {
      result = this._usersService.updateUser(this.user);
    } else {
      result = this._usersService.addUser(this.form.value)
        .subscribe(x => {
            this._router.navigate(['Users']);
        });
    }


  }

}