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
  	// var nextPos = 
  	// this.posses.push(nextPos)
  };



  AIPlayer.prototype.checkHorizontals = function(player){
  	var playPos;
    var posSeqs = [
      // horizontals
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
    ];

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
  }

})();