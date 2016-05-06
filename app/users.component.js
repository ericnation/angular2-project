System.register(["angular2/core", './users.service', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, users_service_1, router_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_service) {
                    this._service = _service;
                    this.isLoading = true;
                }
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getUsers()
                        .subscribe(function (users) {
                        _this.isLoading = false;
                        _this.users = users;
                    });
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        template: "\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"loader-wrapper\" *ngIf=\"isLoading\">\n            <span class=\"loader\">\n              <i class=\"fa fa-spin fa-spinner fa-3x\"></i>\n            </span>\n          </div>\n          \n          <h1>Users</h1>\n          <a [routerLink]=\"['NewUser']\" class=\"btn btn-primary new-user-btn\">Add User</a>\n          <table class=\"table table-bordered table-striped\">\n            <tr>\n              <th>Name</th>\n              <th>Email</th>\n              <th>Edit</th>\n              <th>Delete</th>\n            </tr>\n            <tr *ngFor=\"#user of users\">\n              <td>{{user.name}}</td>\n              <td>{{user.email}}</td>\n              <td><a [routerLink]=\"['EditUser', {id: user.id}]\" class=\"edit-link\"><i class=\"fa fa-edit\"></i> </a></td>\n              <td><a href=\"\" class=\"remove-link\"><i class=\"fa fa-remove\"></i> </a></td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  ",
                        providers: [users_service_1.UsersService],
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UsersService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map