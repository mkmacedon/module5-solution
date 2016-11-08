(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'UserService'];
function SignupController(MenuService, UserService) {
  var $ctrl = this;
  $ctrl.menuitemValid = null;
  $ctrl.isSuccess = false;
  $ctrl.registration = {
  	firstName: "",
  	lastName: "",
  	email: "",
  	phone: "",
  	menu: ""
  };
  

  $ctrl.submit = function() {
  	MenuService.getMenuItemsForItem($ctrl.registration.menu).then(
  	function(data) {
  		UserService.setUser({
  			preferences: $ctrl.registration,
  			menu: data
  		});
  		$ctrl.menuitemValid = null;
  		$ctrl.isSuccess = true;
  		$ctrl.registration = {
		  	firstName: "",
		  	lastName: "",
		  	email: "",
		  	phone: "",
		  	menu: ""
		};
  		$ctrl.signupForm.$setPristine();
  		$ctrl.signupForm.$setUntouched();
  	},
  	function(error) {
  		$ctrl.menuitemValid = false;
  		$ctrl.isSuccess = false;
  		return false;
  	});
  };
}

})();
