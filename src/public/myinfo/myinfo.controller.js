(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['user'];
function InfoController(user) {
  var $ctrl = this;
  $ctrl.user = user;
  $ctrl.isRegistered = user != null;
}

})();
