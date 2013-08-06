function Player() {

}

Player.prototype.score = 0;

Player.prototype.hasWon = false;

Player.prototype.winPoint = function() {
    if (this.score == 40) this.hasWon = true;
    if (this.score == 30) this.score = 40;
    else {
        this.score += 15;
    }
};

function Tennis() {

}

Tennis.prototype.players = { player1: new Player(), player2: new Player() };

Tennis.prototype.playGame = function(pointWinners) {
    for (var index in pointWinners) {
        if (pointWinners[index] == 1) {
            this.players.player1.winPoint();
        } else if (pointWinners[index] == 2) {
            this.players.player2.winPoint();
        }
    }
};

Tennis.prototype.isAtDeuce = function() {
    return this.players.player1.score == 40 && this.players.player2.score == 40;
};