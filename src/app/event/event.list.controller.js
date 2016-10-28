(function () {
  'use strict';

  angular.module('eventplanner').controller('EventListController', eventListController);

  function eventListController($localForage) {
    "ngInject";

    var vm = this;

    vm.init = init;

    vm.init();

    function init() {
      $localForage.getItem('events').then(function (data) {
        vm.events = data;
      });
    }
  }
})();
