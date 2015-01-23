(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var AIPlayer = TTT.AIPlayer = function (game, board) {
	  this.game = game;
	  this.board = board;
    this.mark = "o";
    this.poses = [];
  };

  AIPlayer.prototype.playTurn = function(){
  	var nextMove;
  	for (var i = 0; i < 3; i++){
  		nextMove = this.checkRows(this, this.board.posSeqs[i])
  	}

  	nextMove ? this.board.placeMark(nextMove, "o") : this.block();
  };

 AIPlayer.prototype.checkRows = function(player, posSeqs){
  	var playPos;
    for (var i = 0; i < 3; i++){
    	var counter = 0;
    	for (var j = 0; j < 3; j++){
    		if (player.poses.indexOf(posSeqs[i][j]) !== - 1){
    			counter += 1;
    		} else if (player.poses.indexOf(posSeqs[i][j]) === - 1 && counter == 2){
    			playPos = posSeqs[i][j];
    		}
    	}
    }

    return playPos;
  };

 AIPlayer.prototype.block = function(){
  	var nextMove;
  	for (var i = 0; i < 3; i++){
  		nextMove = this.checkRows(this.enemy, this.board.posSeqs[i])
  	}

  	nextMove ? this.board.placeMark(nextMove, "o") : this.fork();
  };

  AIPlayer.prototype.fork = function(){

  };

})();