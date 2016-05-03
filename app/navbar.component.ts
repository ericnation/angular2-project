import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

@Component({
  selector: 'navbar',
  templateUrl: 'app/navbar.component.html',
  styles: [`
    .navbar {
      border-radius: 0;
    }
  `],
  directives: [ROUTER_DIRECTIVES]

})

export class NavBarComponent {
  constructor(private _router: Router){

  }

  isActive(instruction) {
    return this._router.isRouteActive(this._router.generate(instruction));
  }
}
