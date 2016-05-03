import {Component} from "angular2/core";
import {Validators, ControlGroup, FormBuilder} from "angular2/common";
import {generalFormValidators} from "./formValidators";
import {CanDeactivate, Router} from "angular2/router";

@Component({
  selector: 'newuser',
  templateUrl: 'app/newuser.html'
})

export class NewUserComponent implements CanDeactivate{

  form: ControlGroup;

  constructor(fb: FormBuilder, private _router: Router){
    this.form = fb.group({
      name: ['', Validators.compose([Validators.required, generalFormValidators.cannotContainSpace])],
      email: ['', generalFormValidators.email],
      phone: [],
      address: fb.group({
          street: [],
          suite: [],
          city: [],
          zip: []
      })
    });


  }
  routerCanDeactivate(next, previous) {
    if(this.form.dirty) {
      return confirm('Are you sure you want to navigate away from this page?');
    }
    return true;
  }

}