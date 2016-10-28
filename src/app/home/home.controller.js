'use strict';

angular.module('eventplanner').controller('HomeController', homeController);

/** @ngInject */
function homeController($localForage, $rootScope, $mdToast, $log) {
  var vm = this;

  vm.login = login;

  function login(form) {
    if (form.$valid) {
      $localForage.getItem('user').then(function (data) {
        if (data) {
          if (data.email === vm.user.email && data.password === vm.user.password) {
            $rootScope.loggedUser = data;
            $mdToast.show(
              $mdToast.simple()
              .textContent('Welcome, ' + data.name)
              .hideDelay(3000)
            );
          } else {
            $mdToast.show(
              $mdToast.simple()
              .textContent('Invalid credentials!')
              .hideDelay(3000)
            );
          }
        } else {
          $mdToast.show(
            $mdToast.simple()
            .textContent('No registered users.')
            .hideDelay(3000)
          );
        }
      }).catch(function (error) {
        $mdToast.show(
          $mdToast.simple()
            .textContent('Unexpected error: ' + error)
            .hideDelay(3000)
        );
        $log.error(error);
      });
    }
  }
}
