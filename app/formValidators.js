System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var generalFormValidators;
    return {
        setters:[],
        execute: function() {
            generalFormValidators = (function () {
                function generalFormValidators() {
                }
                generalFormValidators.cannotContainSpace = function (control) {
                    if (control.value.indexOf(' ') >= 0)
                        return { cannotContainSpace: true };
                    return null;
                };
                generalFormValidators.email = function (control) {
                    var regEx = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
                    var valid = regEx.test(control.value);
                    return valid ? null : { email: true };
                };
                return generalFormValidators;
            }());
            exports_1("generalFormValidators", generalFormValidators);
        }
    }
});
//# sourceMappingURL=formValidators.js.map