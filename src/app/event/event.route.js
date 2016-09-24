'use strict';

angular
  .module('eventplanner')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider) {

  $stateProvider
    .state('event', {
      url: '/event',
      abstract: true,
      template: '<ui-view/>'
    })
    .state('event.list', {
      url: '/list',
      templateUrl: 'app/event/event.list.html',
      controller: 'EventList',
      controllerAs: 'vm'
    })
    .state('event.create', {
      url: '/create',
      templateUrl: 'app/event/event.form.html',
      controller: 'EventCreate',
      controllerAs: 'vm'
    });
}
