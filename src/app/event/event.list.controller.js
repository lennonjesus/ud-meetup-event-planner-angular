'use strict';

angular.module('eventplanner').controller('EventListController', eventListController);

/** @ngInject */
function eventListController($localForage) {
  var vm = this;

  vm.init = init;

  vm.init();

  function init() {
    $localForage.getItem('events').then(function (data) {
      vm.events = data;
    });
  }
}
