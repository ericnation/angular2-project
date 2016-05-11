"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var router_1 = require('angular2/router');
var NavBarComponent = (function () {
    function NavBarComponent(_router) {
        this._router = _router;
    }
    NavBarComponent.prototype.isActive = function (route) {
        var instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction);
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            templateUrl: 'app/navbar.component.html',
            styles: ["\n    .navbar {\n      border-radius: 0;\n    }\n  "],
            directives: [router_1.ROUTER_DIRECTIVES]
        })
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map