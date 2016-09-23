'use strict';

angular
  .module('eventplanner')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/signup/signup.html',
      controller: 'Signup',
      controllerAs: 'vm'
    });
}
