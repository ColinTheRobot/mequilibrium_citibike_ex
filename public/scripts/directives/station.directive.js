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
        <ul>
          <li>Free Bikes: <span ng-bind="data.free_bikes"></span></li>
        </ul>

        <div>
          <button type="button" ng-click="home.increment(data)"> + </button>
          <button type="button" ng-click="home.decrement(data)"> - </button>
        </div>
    `
  };
}
