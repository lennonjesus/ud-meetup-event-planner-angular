angular
  .module('eventplanner')
  .component('app', {
    templateUrl: 'app/home/hello.html',
    controller: function () {
      this.hello = 'Hello!';
    }
  });
