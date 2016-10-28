'use strict';

angular
  .module('eventplanner')
  .controller('SignupController', signupController);

/** @ngInject */
function signupController($localForage, $rootScope, $mdToast) {
  var vm = this;

  vm.createUser = createUser;

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
        });
      });
    }
  }
}
