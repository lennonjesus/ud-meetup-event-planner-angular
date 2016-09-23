describe('hello component', function () {
  beforeEach(module('eventplanner', function ($provide) {
    $provide.factory('app', function () {
      return {
        templateUrl: 'app/home/hello.html'
      };
    });
  }));
  it('should render hello world', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    var h1 = element.find('h1');
    expect(h1.html()).toEqual('Hello World!');
  }));
});
