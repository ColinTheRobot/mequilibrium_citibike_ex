angular.module('cityBikeApp', ['ui.router'])
  .config(Router)

function Router($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('index', {
      url: '/',
      templateUrl: '/partials/index.html'
    })
    .state('station', {
      url:'/station/:id',
      templateUrl: '/partials/station.html'
    })
}

