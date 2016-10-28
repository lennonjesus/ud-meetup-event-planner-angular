(function () {
  'use strict';

  angular.module('eventplanner').config(routesConfig);

  function routesConfig($stateProvider) {
    "ngInject";

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    });
  }
})();
