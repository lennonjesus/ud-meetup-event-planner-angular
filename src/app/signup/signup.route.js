(function () {
  'use strict';

  angular.module('eventplanner').config(routesConfig);

  function routesConfig($stateProvider) {
    "ngInject";

    $stateProvider
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/signup/signup.html',
      controller: 'SignupController',
      controllerAs: 'vm'
    });
  }
})();
