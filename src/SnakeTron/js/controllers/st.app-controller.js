(function (ng) {

  'use strict';

  const inject = ['$scope'];

  function AppController($scope) {
    let vm = this;
    vm.keyPress = keyPress;

    function keyPress($event) {
      $scope.$broadcast('st.keyPress', $event);
    }
  }

  ng.module('snakeTron')
    .controller('AppController', AppController);

})(window.angular);