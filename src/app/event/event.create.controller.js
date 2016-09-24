'use strict';

angular.module('eventplanner').controller('EventCreate', eventCreate);

/** @ngInject */
function eventCreate($mdConstant) {

  var vm = this;

  vm.eventTypeList = [
    {value: 'birthday', label: 'Birthday'},
    {value: 'conferenceTalk', label: 'Conference Talk'},
    {value: 'party', label: 'Party'},
    {value: 'show', label: 'Show'},
    {value: 'wedding', label: 'Wedding'}
  ];

  vm.guests = [];

  vm.states = [
    {abbrev: 'MG', name: 'Minas Gerais'},
    {abbrev: 'RJ', name: 'Rio de Janeiro'},
    {abbrev: 'SP', name: 'São Paulo'}
  ];

  vm.separatorKeys = [$mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA, /* semicolon = 186 */ 186];

}
