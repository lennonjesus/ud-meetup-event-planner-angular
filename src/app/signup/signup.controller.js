(function () {
  'use strict';

  angular.module('eventplanner').controller('SignupController', signupController);

  function signupController($localForage, $rootScope, $mdToast, $state, $timeout) {
    "ngInject";

    var vm = this;

    vm.init = init;
    vm.createUser = createUser;

    vm.init();

    function init() {
      $timeout(function () {
        angular.element('#inputName').focus();
      }, 300);
    }

    function createUser(form) {
      if (form.$valid) {
        $localForage.setItem('user', vm.user).then(function () {
          $localForage.getItem('user').then(function (data) {
            $rootScope.loggedUser = data;
            $mdToast.show(
              $mdToast.simple()
              .textContent('Welcome, ' + data.name)
              .hideDelay(3000)
            );
            $state.go('home');
          });
        });
      }
    }
  }
})();
