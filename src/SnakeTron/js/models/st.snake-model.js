(function (ng) {
  const DIRECTIONS = {
    '38': { x: 0, y: -1 },
    '40': { x: 0, y: 1 },
    '37': { x: -1, y: 0 },
    '39': { x: 1, y: 0 }
  }

  function SnakeFactory() {
    function Snake(x, y, length) {
      this.dim = 25;
      this.direction = this.DIRECTIONS.RIGHT;
      this.body = [new SnakeBody(x, y, this.dim)];

      for (var i = 1; i < length; i++) {
        this.body.push(this.body[0].add());
      }
    }

    Snake.prototype.move = function () {
      let x = this.body[0].x + (this.dim + 1) * this.direction.x;
      let y = this.body[0].y + (this.dim + 1) * this.direction.y;
      this.body[0].move(x, y);
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

    function SnakeBody(x, y, dim) {
      this.x = x;
      this.y = y;
      this.dim = dim;
      this.next = null;
    }

    SnakeBody.prototype.add = function () {
      if (this.next === null) {
        this.next = new SnakeBody(this.x, this.y, this.dim);
        return this.next;
      } else {
        return this.next.add();
      }
    }

    SnakeBody.prototype.move = function (x, y) {
      let oldX = this.x;
      let oldY = this.y;
      this.x = x;
      this.y = y;
      this.style = {
        position: 'absolute',
        height: this.dim + 'px',
        width: this.dim + 'px',
        top: this.y + 'px',
        left: this.x + 'px'
      }
      if (this.next !== null) {
        this.next.move(oldX, oldY);
      }
    }

    return (Snake);
  }

  ng.module('snakeTron')
    .factory('Snake', SnakeFactory);

})(angular);