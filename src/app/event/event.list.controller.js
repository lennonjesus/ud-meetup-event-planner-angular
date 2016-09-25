'use strict';

angular.module('eventplanner').controller('EventList', eventList);

/** @ngInject */
function eventList($localForage) {
  var vm = this;

  vm.init = init;

  vm.init();

  function init() {
    $localForage.getItem('events').then(function (data) {
      vm.events = data;
    });
  }
}
