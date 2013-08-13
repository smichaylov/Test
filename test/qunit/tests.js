var tennis;

module( "Tennis Tests", {
  setup: function() {
    tennis = new Tennis();
  },
  teardown: function() {
    // clean up after each test
  }
});

test("should have two players", function() {
	ok(tennis.players.hasOwnProperty('player1'));
	ok(tennis.players.hasOwnProperty('player2'));
});
    
test("should start with both players scoring 0", function (assert) {
	assert.equal(tennis.players.player1.score, 0);
	assert.equal(tennis.players.player2.score, 0);
});

test("should be deuce if both players have 40 points", function () {
	tennis.playGame([1,2,1,2,1,2]);
	ok(tennis.isAtDeuce());
});
    
test("should not be deuce if first player has 40 and second has 30 points", function () {
	tennis.playGame([1, 2, 1, 2, 1]);
	ok(!tennis.isAtDeuce());
});

var player;

module( "Player Tests", {
  setup: function() {
    player = new Player();
  },
  teardown: function() {
    // clean up after each test
  }
});

test("should have score of 15 after winning a point", function ( assert ) {
        player.winPoint();
        assert.equal(player.score,15);
    });
    
    test("should have score of 30 after winning 2 points", function ( assert ) {
        player.winPoint();
        player.winPoint();
        assert.equal(player.score,30);
    });
    
    test("should have score of 40 after winning 3 points", function ( assert ) {
        player.winPoint();
        player.winPoint();
        player.winPoint();
        assert.equal(player.score,40);
    });
    
    test("should be the winner after winning 4 points", function () {
        player.winPoint();
        player.winPoint();
        player.winPoint();
        player.winPoint();
        ok(player.hasWon);
    });
