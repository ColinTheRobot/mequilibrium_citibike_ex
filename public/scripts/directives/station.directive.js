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
      <div class="station-name mui--text-dark mui--text-headline">{{data.name}}</div>
      <div class="mui--text-dark-secondary mui--text-caption">Available Bikes: {{data.free_bikes}}</div>

    <dl>
      <dd class="percentage percentage-{{home.getPercentage(data.free_bikes, data.empty_slots)}}">
      </dd>
    </dl>
        <div>
          <button class="mui-btn mui-btn--small mui-btn--fab mui-btn--danger"type="button" ng-click="home.decrement(data)"> - </button>
          <button class="mui-btn mui-btn--small mui-btn--fab mui-btn--primary" type="button" ng-click="home.increment(data)"> + </button>
        </div>
    `
  };
}
