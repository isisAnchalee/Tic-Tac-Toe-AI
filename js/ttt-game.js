(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var Game = TTT.Game = function () {
    this.board = new TTT.Board();
    this.currentPlayer = TTT.Board.marks[0];
	  this.humanPlayer = new TTT.HumanPlayer(this, this.board);
    this.AIPlayer = new TTT.AIPlayer(this, this.board, this.humanPlayer);
  };

  Game.prototype.swapTurn = function () {
    if (this.currentPlayer === TTT.Board.marks[0]) {
      this.currentPlayer = TTT.Board.marks[1];
    } else {
      this.currentPlayer = TTT.Board.marks[0];
    }
  };

  Game.prototype.playMove = function (pos) {
    this.board.placeMark(pos, this.currentPlayer);
    this.humanPlayer.poses.push(pos)
    this.endGame();
    this.swapTurn();
    this.AIPlayer.playTurn();
    this.endGame();
    this.swapTurn();
  };

  Game.prototype.endGame = function(){
    if (this.board.isOver()){
      console.log("game over!!!");
    }
  }
  
})();