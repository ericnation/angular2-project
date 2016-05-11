"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var users_service_ts_1 = require('./users.service.ts');
var router_1 = require('angular2/router');
var spinner_component_ts_1 = require("./../shared/spinner.component.ts");
var UsersComponent = (function () {
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
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        if (confirm('Are you sure you want to delete ' + user.name + '?')) {
            var index = this.users.indexOf(user);
            this.users.splice(index, 1);
            this._service.deleteUser(user.id)
                .subscribe(null, function (err) {
                alert('Could not delete the user.');
                _this.users.splice(index, 0, user);
            });
        }
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'users',
            templateUrl: 'users.component.html',
            providers: [users_service_ts_1.UsersService],
            directives: [router_1.RouterLink, spinner_component_ts_1.SpinnerComponent]
        })
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map