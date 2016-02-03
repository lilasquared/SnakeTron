(function(ng) {
  'use strict';

  const inject = ['Snake'];

  function FieldFactory(Snake) {

    class Field {
      constructor(numSnakes) {
        this.snakes = [];
        this.width = 500;
        this.height = 500;

        for (let i = 0; i < numSnakes; i++) {
          this.snakes.push(new Snake(200, 200, 10, this));
        }

        this.style = {
          height: this.height + 'px',
          width: this.width + 'px'
        }
      }
    }

    return Field;
  }

  FieldFactory.$inject = inject;

  ng.module('snakeTron')
    .factory('Field', FieldFactory);

})(angular);