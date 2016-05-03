import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {NavBarComponent} from './navbar.component';
import {UsersComponent} from './users.component';
import {PostsComponent} from './posts.component';
import {HomeComponent} from "./home.component";
import {NewUserComponent} from "./newuser.component";

@RouteConfig([
  { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
  { path: '/users', name: 'Users', component: UsersComponent },
  { path: '/users/new', name: 'NewUser', component: NewUserComponent },
  { path: '/posts', name: 'Posts', component: PostsComponent },
  { path: '/*other', name: 'Other', redirectTo: ['Home']}
])

@Component({
  selector: 'my-app',
  template: `
    <navbar></navbar>
    <div class="container">
       <router-outlet></router-outlet>
    </div>
    
  `,
  directives: [ROUTER_DIRECTIVES, NavBarComponent, UsersComponent, PostsComponent]
})

export class AppComponent {
  constructor(){}
}