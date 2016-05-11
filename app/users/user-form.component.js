"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var common_1 = require("angular2/common");
var formValidators_1 = require("./../shared/formValidators");
var users_service_ts_1 = require('./users.service.ts');
var user_1 = require('./user');
var UserFormComponent = (function () {
    function UserFormComponent(fb, _router, _routeParams, _usersService) {
        this._router = _router;
        this._routeParams = _routeParams;
        this._usersService = _usersService;
        this.user = new user_1.User();
        this.form = fb.group({
            name: ['', common_1.Validators.required],
            email: ['', formValidators_1.generalFormValidators.email],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._routeParams.get("id");
        this.title = id ? "Edit User" : "New User";
        if (!id)
            return;
        this._usersService.getUser(id)
            .subscribe(function (user) { return _this.user = user; }, function (response) {
            if (response.status == 404) {
                _this._router.navigate(['NotFound']);
            }
        });
    };
    UserFormComponent.prototype.routerCanDeactivate = function (next, previous) {
        if (this.form.dirty) {
            return confirm('Are you sure you want to navigate away from this page?');
        }
        return true;
    };
    UserFormComponent.prototype.save = function () {
        var _this = this;
        var result;
        if (this.user.id) {
            result = this._usersService.updateUser(this.user);
        }
        else {
            result = this._usersService.addUser(this.form.value)
                .subscribe(function (x) {
                _this._router.navigate(['Users']);
            });
        }
    };
    UserFormComponent = __decorate([
        core_1.Component({
            selector: 'user-form',
            templateUrl: 'user-form.component.html',
            providers: [users_service_ts_1.UsersService]
        })
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map