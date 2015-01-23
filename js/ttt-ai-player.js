(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var AIPlayer = TTT.AIPlayer = function (game, board, enemy) {
	  this.game = game;
	  this.board = board;
    this.mark = "o";
    this.poses = [];
    this.enemy = enemy;
  };

  AIPlayer.diagonals = [
  	[[0, 0], [1, 1], [2, 2]],
  	[[2, 0], [1, 1], [0, 2]]
  ]

	AIPlayer.verticals = [
		[[0, 0], [1, 0], [2, 0]],
	  [[0, 1], [1, 1], [2, 1]],
	  [[0, 2], [1, 2], [2, 2]]
  ]   

  AIPlayer.horizontals = [
		[[0, 0], [0, 1], [0, 2]],
	  [[1, 0], [1, 1], [1, 2]],
	  [[2, 0], [2, 1], [2, 2]]
  ]

  AIPlayer.prototype.playTurn = function(){
  	var nextMove;
  	var dirs = [AIPlayer.diagonals, AIPlayer.verticals, AIPlayer.horizontals];

  	for (var i = 0; i < 3; i++){
  		nextMove = this.checkRows(this, dirs[i]);
  	}

  	nextMove ? this.board.placeMark(nextMove, "o") : this.block();
  };

 AIPlayer.prototype.checkRows = function(player, posSeqs){
  	var playPos;
  	console.log("player:", player);
    for (var i = 0; i < 3; i++){
    	var counter = 0;
    	  	console.log(player.poses);
    	for (var j = 0; j < 3; j++){
    		if (player.poses.indexOf(posSeqs[0][i][j]) !== - 1){
    			counter += 1;
    		} else if (player.poses.indexOf(posSeqs[0][i][j]) === - 1 && counter == 2){
    			playPos = posSeqs[0][i][j];
    		}
    	}
    }

    return playPos;
  };

 AIPlayer.prototype.block = function(){
  	var nextMove;
  	var dirs = [AIPlayer.diagonals, AIPlayer.verticals, AIPlayer.horizontals];

  	for (var i = 0; i < 3; i++){
  		nextMove = this.checkRows(this.enemy, dirs[i]);
  	}

  	nextMove ? this.board.placeMark(nextMove, "o") : this.fork();
  };

  AIPlayer.prototype.fork = function(){
  	console.log("meow!")
  };

  AIPlayer.prototype.colorSquare = function(pos){
  	$('div[data-row=\'pos[0]\' data-col=\'pos[1]\']').color
  };
})();