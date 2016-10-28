(function () {
  'use strict';

  angular.module('eventplanner').controller('EventCreateController', eventCreateController);

  function eventCreateController($mdConstant, $localForage, $rootScope, $mdToast) {
    "ngInject";

    var vm = this;

    vm.event = {
      guests: []
    };

    vm.eventTypeList = [
      {value: 'birthday', label: 'Birthday'},
      {value: 'conferenceTalk', label: 'Conference Talk'},
      {value: 'party', label: 'Party'},
      {value: 'show', label: 'Show'},
      {value: 'wedding', label: 'Wedding'}
    ];

    vm.guests = [];

    vm.states = [
      {abbrev: 'BA', name: 'Bahia'},
      {abbrev: 'MG', name: 'Minas Gerais'},
      {abbrev: 'RJ', name: 'Rio de Janeiro'},
      {abbrev: 'SP', name: 'São Paulo'}
    ];

    vm.separatorKeys = [$mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA, /* semicolon = 186 */ 186];

    vm.createEvent = createEvent;

    function createEvent(form) {
      //FIXME issue with localforage and date

      if (form.$valid) {
        $localForage.getItem('events').then(function (data) {
          var events = data || [];

          vm.event.id = Date.now();

          events.push(vm.event);

          $localForage.setItem('events', events).then(function () {
            $mdToast.show(
              $mdToast.simple()
              .textContent(vm.event.name + ' created!')
              .hideDelay(3000)
            );
          });
        });
      }
    }
  }
})();
