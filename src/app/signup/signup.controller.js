'use strict';

angular
  .module('eventplanner')
  .controller('Signup', signup);

/** @ngInject */
function signup($localForage, $rootScope) {
  var vm = this;

  vm.createUser = createUser;

  function createUser(form) {
    if (form.$valid) {
      $localForage.setItem('user', vm.user).then(function () {
        $localForage.getItem('user').then(function (data) {
          $rootScope.loggedUser = data;
        });
      });
    }
  }
}
