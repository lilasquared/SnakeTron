(function (ng) {

  'use strict';

  const inject = ['$interval', '$scope', 'Snake'];

  function GameController($interval, $scope, Snake) {
    var vm = this;
    vm.snake = new Snake(200, 200, 20);

    $interval(function () {
      vm.snake.move();
    }, 150);

    vm.changeDir = changeDir;

    $scope.$on('st.keyPress', changeDir)

    function changeDir(event, args) {
      console.log(vm.snake.DIRECTIONS[args.keyCode]);
      if (vm.snake.DIRECTIONS.hasOwnProperty(args.keyCode)) {
        vm.snake.direction = vm.snake.DIRECTIONS[args.keyCode]
      }
    }
  }

  GameController.$inject = inject;

  ng.module('snakeTron')
    .controller('GameController', GameController);

})(angular);