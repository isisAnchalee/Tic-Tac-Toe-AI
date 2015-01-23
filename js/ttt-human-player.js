(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var HumanPlayer = TTT.HumanPlayer = function (game, board) {
	  this.game = game;
    this.board = board;
    this.sign = "x"
  };

  HumanPlayer.prototype.makeMove = function(){

  };

})();