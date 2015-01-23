(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var Game = TTT.Game = function (player1, player2) {
    this.board = new TTT.Board();
    this.currentPlayer = TTT.Board.marks[0];
	  this.player1 = player1;
	  this.player2 = player2;
  };

  Game.prototype.startGame = function(){
    while (!this.gameOver()){
      this.player1.playMove();
      this.player2.aiMove();
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
    this.swapTurn();
  };

  function endGame(){
    console.log("GAME OVER!")
  }
  
})();