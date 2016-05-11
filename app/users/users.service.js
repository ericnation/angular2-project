"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
require('rxjs/add/operator/map');
var UsersService = (function () {
    function UsersService(_http) {
        this._http = _http;
        this._baseUrl = 'http://jsonplaceholder.typicode.com/';
    }
    UsersService.prototype.getUsers = function () {
        return this._http.get(this._baseUrl + 'users')
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.getUser = function (userId) {
        return this._http.get(this.getUserUrl(userId))
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.addUser = function (user) {
        return this._http.post(this._baseUrl + 'users', JSON.stringify(user))
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.updateUser = function (user) {
        return this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.deleteUser = function (userId) {
        return this._http.delete(this.getUserUrl(userId))
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.getUserUrl = function (userId) {
        return this._baseUrl + 'users/' + userId;
    };
    UsersService = __decorate([
        core_1.Injectable()
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map