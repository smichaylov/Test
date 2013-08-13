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
    
//    test("should start with both players scoring 0", function () {
//        ok(tennis.players.player1.score).toEqual(0);
//        ok(tennis.players.player2.score).toEqual(0);
//    });

    test("should be deuce if both players have 40 points", function () {
        tennis.playGame([1,2,1,2,1,2]);
        ok(tennis.isAtDeuce());
    });
    
    test("should not be deuce if first player has 40 and second has 30 points", function () {
        tennis.playGame([1, 2, 1, 2, 1]);
        ok(!tennis.isAtDeuce());
    });
