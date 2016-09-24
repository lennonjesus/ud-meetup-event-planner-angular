'use strict';

angular
  .module('eventplanner')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: 'Home',
      controllerAs: 'vm'
    });
}
