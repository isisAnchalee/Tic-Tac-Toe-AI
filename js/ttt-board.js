(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  Board.marks = ["x", "o"];

  Board.makeGrid = function () {
    var grid = [];

    for (var i = 0; i < 3; i++) {
      grid.push([]);
      for (var j = 0; j < 3; j++) {
        grid[i].push(null);
      }
    }

    return grid;
  };

  Board.isValidPos = function (pos) {
    return (
      (0 <= pos[0]) && (pos[0] < 3) && (0 <= pos[1]) && (pos[1] < 3)
    );
  };

  Board.prototype.isEmptyPos = function (pos) {
    if (!Board.isValidPos(pos)) {
      throw new MoveError("Is not valid position!");
    }

    return (this.grid[pos[0]][pos[1]] === null);
  };

  Board.prototype.isOver = function () {
    if (this.winner() != null) {
      return true;
    }

    for (var rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (var colIdx = 0; colIdx < 3; colIdx++) {
        if (this.isEmptyPos([rowIdx, colIdx])) {
          return false;
        }
      }
    }

    return true;
  };
  
  Board.prototype.placeMark = function (pos, mark) {
    if (!this.isEmptyPos(pos)) {
      throw new MoveError("Is not an empty position!");
    }

    this.grid[pos[0]][pos[1]] = mark;
  };

  var Board = TTT.Board = function () {
    this.grid = Board.makeGrid();
  };

})();