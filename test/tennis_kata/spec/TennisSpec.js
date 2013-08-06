describe("Tennis", function () {
    var tennis;
    
    beforeEach(function () {
        tennis = new Tennis();
    });

    it("should have two players", function() {
        expect(tennis.players.hasOwnProperty('player1')).toBeTruthy();
        expect(tennis.players.hasOwnProperty('player2')).toBeTruthy();
    });
    
    it("should start with both players scoring 0", function () {
        expect(tennis.players.player1.score).toEqual(0);
        expect(tennis.players.player2.score).toEqual(0);
    });

    it("should be deuce if both players have 40 points", function () {
        tennis.playGame([1,2,1,2,1,2]);
        expect(tennis.isAtDeuce()).toBeTruthy();
    });
    
    it("should not be deuce if first player has 40 and second has 30 points", function () {
        tennis.playGame([1, 2, 1, 2, 1]);
        expect(tennis.isAtDeuce()).toBeFalsy();
    });
});

describe("Player", function () {
    var player;

    beforeEach(function() {
        player = new Player();
    });
    
    it("should have score of 15 after winning a point", function () {
        player.winPoint();
        expect(player.score).toEqual(15);
    });
    
    it("should have score of 30 after winning 2 points", function () {
        player.winPoint();
        player.winPoint();
        expect(player.score).toEqual(30);
    });
    
    it("should have score of 40 after winning 3 points", function () {
        player.winPoint();
        player.winPoint();
        player.winPoint();
        expect(player.score).toEqual(40);
    });
    
    it("should be the winner after winning 4 points", function () {
        player.winPoint();
        player.winPoint();
        player.winPoint();
        player.winPoint();
        expect(player.hasWon).toEqual(true);
    });


});
