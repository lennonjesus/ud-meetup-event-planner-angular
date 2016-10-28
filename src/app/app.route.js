(function () {
  'use strict';

  angular.module('eventplanner').config(routesConfig);

  function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    "ngInject";

    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    });
  }
})();
