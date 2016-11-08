(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


UserService.$inject = [];
function UserService() {
  var service = this;
  var user = null;

  service.setUser = function(userObject) {
    user = userObject;
  };

  service.getUser = function() {
    return user;
  };
}



})();
