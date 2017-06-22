angular.module('cityBikeApp')
  .directive('station', station);

function station() {
  return {
    scope: {
      data: '=data'
    },
    restrict: 'E',
    controller: 'HomeController as home',
    template: `
        <h4>{{data.name}}</h4>
        <p>Free Bikes: {{data.free_bikes}}</p>

        <div>
          <button class="mui-btn mui-btn--small mui-btn--fab mui-btn--primary" type="button" ng-click="home.increment(data)"> + </button>
          <button class="mui-btn mui-btn--small mui-btn--fab mui-btn--danger"type="button" ng-click="home.decrement(data)"> - </button>
        </div>
    `
  };
}
