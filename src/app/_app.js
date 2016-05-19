var ENDPOINT_URI = 'http://localhost:3000';

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
  //abstract state serves as a PLACEHOLDER or NAMESPACE for application states
    .state('app', {
      abstract: true
  });

  $urlRouterProvider.otherwise('/home');
}

angular.module('app', [
  'ui.router',
  'common',
  'portfolios',
  'home',
  'templates-app'
])
  .constant('ENDPOINT_URI', ENDPOINT_URI)
  .config(config);
