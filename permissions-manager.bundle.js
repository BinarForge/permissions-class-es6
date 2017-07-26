'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PermissionsManager = function () {
    'use strict';

    var Manager = function () {
        function Manager(userPermissions) {
            _classCallCheck(this, Manager);

            this.userPermissions = userPermissions;
        }

        _createClass(Manager, [{
            key: 'bitCheck',
            value: function bitCheck(a, b) {
                return (a & b) > 0;
            }
        }, {
            key: 'setPermission',
            value: function setPermission(permission, give) {
                if (give === true) {
                    if (!this.bitCheck(this.userPermissions, permission)) {
                        this.userPermissions += permission;
                    }
                } else {
                    if (this.bitCheck(this.userPermissions, permission)) {
                        this.userPermissions -= permission;
                    }
                }
            }
        }, {
            key: 'hasPermission',
            value: function hasPermission(permission) {
                return this.bitCheck(permission, this.userPermissions);
            }
        }]);

        return Manager;
    }();

    return Manager;
}();
