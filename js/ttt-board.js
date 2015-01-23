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

  var Board = TTT.Board = function () {
    this.grid = Board.makeGrid();
  };
  
})();