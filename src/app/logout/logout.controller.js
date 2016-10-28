(function () {
  'use strict';

  angular.module('eventplanner').controller('LogoutController', logoutController);

  function logoutController($rootScope, $mdToast) {
    "ngInject";

    var vm = this;

    vm.logout = logout;

    function logout() {
      $mdToast.show(
        $mdToast.simple()
          .textContent('See you later! o/')
          .hideDelay(3000)
      );

      $rootScope.loggedUser = null;
    }
  }
})();
