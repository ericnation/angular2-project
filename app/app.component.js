"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require("angular2/router");
var navbar_component_1 = require('./navbar.component');
var users_component_ts_1 = require('./users/users.component.ts');
var posts_component_ts_1 = require('./posts/posts.component.ts');
var home_component_1 = require("./home.component");
var user_form_component_ts_1 = require("./users/user-form.component.ts");
var not_found_component_1 = require("./not-found.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        router_1.RouteConfig([
            { path: '/', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
            { path: '/users', name: 'Users', component: users_component_ts_1.UsersComponent },
            { path: '/users/:id', name: 'EditUser', component: user_form_component_ts_1.UserFormComponent },
            { path: '/users/new', name: 'NewUser', component: user_form_component_ts_1.UserFormComponent },
            { path: '/posts', name: 'Posts', component: posts_component_ts_1.PostsComponent },
            { path: '/not-found', name: 'NotFound', component: not_found_component_1.NotFoundComponent },
            { path: '/*other', name: 'Other', redirectTo: ['Home'] }
        ]),
        core_1.Component({
            selector: 'my-app',
            template: "\n    <navbar></navbar>\n    <div class=\"container\">\n       <router-outlet></router-outlet>\n    </div>\n    \n  ",
            directives: [router_1.ROUTER_DIRECTIVES, navbar_component_1.NavBarComponent, users_component_ts_1.UsersComponent, posts_component_ts_1.PostsComponent, user_form_component_ts_1.UserFormComponent]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map