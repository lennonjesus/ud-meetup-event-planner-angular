'use strict';

angular.module('eventplanner').controller('EventDetailController', eventDetailController);

/** @ngInject */
function eventDetailController($mdToast, $log, $localForage, $stateParams) {
  var vm = this;

  vm.init = init;

  vm.init();

  function init() {
    loadEvent();
  }

  function loadEvent() {
    $localForage.getItem('events').then(function (events) {
      vm.event = events.filter(function (event) {
        return (event.id == $stateParams.id);
      })[0];
      console.log(vm.event);
    }).catch(function (error) {
      $mdToast.show(
        $mdToast.simple()
        .textContent('Unexpected error: ' + error)
        .hideDelay(3000)
      );
      $log.error(error);
    });
  }
}
