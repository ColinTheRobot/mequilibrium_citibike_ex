angular.module('cityBikeApp', ['ui.router'])
  .config(Router)

function Router($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('index', {
          url: '/'
    })
}

