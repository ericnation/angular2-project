"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var SpinnerComponent = (function () {
    function SpinnerComponent() {
        this.visible = true;
    }
    __decorate([
        core_1.Input()
    ], SpinnerComponent.prototype, "visible");
    SpinnerComponent = __decorate([
        core_1.Component({
            selector: 'spinner',
            template: "\n    <div class=\"loader-wrapper\" *ngIf=\"visible\">\n      <span class=\"loader\">\n        <i class=\"fa fa-spin fa-spinner fa-3x\"></i>\n      </span>\n    </div>\n  "
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());
exports.SpinnerComponent = SpinnerComponent;
//# sourceMappingURL=spinner.component.js.map