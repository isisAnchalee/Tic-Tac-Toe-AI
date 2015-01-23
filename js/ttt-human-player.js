(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var HumanPlayer = TTT.HumanPlayer = function (game, board) {
	  this.game = game;
    this.board = board;
    this.mark = "x";
    this.posses = [];
  };

  HumanPlayer.prototype.makeMove = function(){

  };

})();