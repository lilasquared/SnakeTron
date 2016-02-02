(function (ng) {
  'use strict';

  var inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('app', {
        url: '',
        controller: 'GameController',
        controllerAs: 'vm',
        templateUrl: '/templates/game.html'
      });
  }

  config.$inject = inject;

  ng.module('snakeTron')
    .config(config);

})(angular);