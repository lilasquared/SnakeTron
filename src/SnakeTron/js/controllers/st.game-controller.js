(function (ng) {
  'use strict';

  const inject = ['$scope', 'Field'];

  function GameController($scope, Field) {
    const vm = this;

    vm.field = new Field(1);

    vm.field.snakes[0].start();

    vm.changeDir = changeDir;

    $scope.$on('st.keyPress', changeDir);

    function changeDir(event, args) {
      if (vm.field.snakes[0].DIRECTIONS.hasOwnProperty(args.keyCode)) {
        vm.field.snakes[0].direction = vm.field.snakes[0].DIRECTIONS[args.keyCode]
      }
    }
  }

  GameController.$inject = inject;

  ng.module('snakeTron')
    .controller('GameController', GameController);

})(angular);