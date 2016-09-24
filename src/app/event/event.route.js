'use strict';

angular
  .module('eventplanner')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider) {

  $stateProvider
    .state('event', {
      url: '/event',
      templateUrl: 'app/event/event.form.html',
      controller: 'EventCreate',
      controllerAs: 'vm'
    });
}
