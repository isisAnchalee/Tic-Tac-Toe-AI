(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var AIPlayer = TTT.AIPlayer = function (game, board) {
	  this.game = game;
	  this.board = board;
    this.mark = "o"
  };

  AIPlayer.prototype.makeMove = function(){
  	//this.board.placemark
  };


})();