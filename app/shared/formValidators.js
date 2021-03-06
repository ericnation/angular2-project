"use strict";
var generalFormValidators = (function () {
    function generalFormValidators() {
    }
    generalFormValidators.email = function (control) {
        var regEx = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        var valid = regEx.test(control.value);
        return valid ? null : { email: true };
    };
    return generalFormValidators;
}());
exports.generalFormValidators = generalFormValidators;
//# sourceMappingURL=formValidators.js.map