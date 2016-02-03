(function (ng) {
  const DIRECTIONS = {
    '38': { x: 0, y: -1 },
    '40': { x: 0, y: 1 },
    '37': { x: -1, y: 0 },
    '39': { x: 1, y: 0 }
  }

  const inject = ['$interval']

  function SnakeFactory($interval) {
    class Snake {
      constructor(x, y, length, field) {
        this.x = x;
        this.y = y;
        this.dim = 25;
        this.slowness = 200;
        this.direction = this.DIRECTIONS.RIGHT;
        this.body = [new SnakeBody(x, y, this.dim)];
        this.field = field;

        for (var i = 1; i < length; i++) {
          this.body.push(this.body[0].add());
        }
      }

      start() {
        $interval.cancel(this.moveInterval);
        this.moveInterval = $interval(() => {
          this.move();
        }, this.slowness);
      }

      move() {
        let x = this.body[0].x + (this.dim + 1) * this.direction.x;
        let y = this.body[0].y + (this.dim + 1) * this.direction.y;
        if (x > this.field.width) {
          x = this.field.width - x;
        }
        this.body[0].move(x, y);
      }
    }

    class SnakeBody {
      constructor(x, y, dim) {
        this.x = x;
        this.y = y;
        this.dim = dim;
        this.next = null;
      }

      add() {
        if (this.next === null) {
          this.next = new SnakeBody(this.x, this.y, this.dim);
          return this.next;
        } else {
          return this.next.add();
        }
      }

      move(x, y) {
        let oldX = this.x;
        let oldY = this.y;
        this.x = x;
        this.y = y;
        this.style = {
          height: this.dim + 'px',
          width: this.dim + 'px',
          top: this.y + 'px',
          left: this.x + 'px'
        }

        if (this.next !== null) {
          this.next.move(oldX, oldY);
        }
      }
    }

    Snake.prototype.DIRECTIONS = {
      UP: DIRECTIONS['38'],
      DOWN: DIRECTIONS['40'],
      LEFT: DIRECTIONS['37'],
      RIGHT: DIRECTIONS['39'],
      '38': DIRECTIONS['38'],
      '40': DIRECTIONS['40'],
      '37': DIRECTIONS['37'],
      '39': DIRECTIONS['39']
    }

    return Snake;
  }


  ng.module('snakeTron')
    .factory('Snake', SnakeFactory);

})(angular);