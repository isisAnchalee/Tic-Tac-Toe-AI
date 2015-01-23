(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var Game = TTT.Game = function () {
    this.board = new TTT.Board();
    this.currentPlayer = TTT.Board.marks[0];
    this.AIPlayer = new TTT.AIPlayer(this, this.board);
	  this.humanPlayer = new TTT.HumanPlayer(this, this.board, this.AIPlayer);

  };

  Game.prototype.startGame = function(){
    while (!this.gameOver()){

    }

    endGame();
  }

  Game.prototype.swapTurn = function () {
    if (this.currentPlayer === TTT.Board.marks[0]) {
      this.currentPlayer = TTT.Board.marks[1];
    } else {
      this.currentPlayer = TTT.Board.marks[0];
    }
  };

  Game.prototype.gameOver = function(){
    return this.board.isOver();
  };

  Game.prototype.playMove = function (pos) {
    this.board.placeMark(pos, this.currentPlayer);
    this.humanPlayer.posses.push(pos)
    this.swapTurn();
    this.AIPlayer.playTurn();
    this.swapTurn();
  };

  function endGame(){
    console.log("GAME OVER!")
  }
  
})();