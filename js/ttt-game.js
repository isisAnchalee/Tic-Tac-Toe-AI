(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var Game = TTT.Game = function (player1, player2) {
    this.board = new Board();
	  this.player1 = player1;
	  this.player2 = player2;
  };

  Game.prototype.startGame = function(){
    while (!this.hasWon()){
      this.player1.playMove();
      this.player2.aiMove();
    }

    endGame();
  }

  Game.prototype.swapTurn = function () {
    if (this.currentPlayer === Board.marks[0]) {
      this.currentPlayer = Board.marks[1];
    } else {
      this.currentPlayer = Board.marks[0];
    }
  };
  
  function endGame(){

  }
  
})();