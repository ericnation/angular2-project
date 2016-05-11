import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {NavBarComponent} from './navbar.component';
import {UsersComponent} from './users/users.component.ts';
import {PostsComponent} from './posts/posts.component.ts';
import {HomeComponent} from "./home.component";
import {UserFormComponent} from "./users/user-form.component.ts";
import {NotFoundComponent} from "./not-found.component";

@RouteConfig([
  { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
  { path: '/users', name: 'Users', component: UsersComponent },
  { path: '/users/:id', name: 'EditUser', component: UserFormComponent },
  { path: '/users/new', name: 'NewUser', component: UserFormComponent },
  { path: '/posts', name: 'Posts', component: PostsComponent },
  { path: '/not-found', name: 'NotFound', component: NotFoundComponent},
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
  directives: [ROUTER_DIRECTIVES, NavBarComponent, UsersComponent, PostsComponent,UserFormComponent]
})

export class AppComponent {
  constructor(){}
}