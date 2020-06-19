const compare = (pOneStat, pTwoStat) => {
    // P1 wins
    if (pOneStat > pTwoStat) {
        console.log('Player 1 wins');
        // pOneHand.push(pOnePlayed, pTwoPlayed);
        // if (limbo.length > 0) {
        //     pOneHand.push(limbo[0], limbo[1]);
        //     limbo = [];
        //     console.log(`Player 1 collects the cards in limbo and now has ${pOneHand.length} cards`)
        // }
        // playerOnesTurn = true;
        // console.log('Next round. Player 1 chooses the statistic this time.');
    // P2 wins
    } else if (pTwoStat > pOneStat) {
        console.log('Player 2 wins');
        // pTwoHand.push(pOnePlayed, pTwoPlayed);
        // if (limbo.length > 0) {
        //     pTwoHand.push(limbo[0], limbo[1]);
        //     limbo = [];
        //     console.log(`Player 1 collects the cards in limbo and now has ${pOneHand.length} cards`)
        // }
        // console.log('Next round. Player 2 chooses the statistic this time.');
        // playerOnesTurn = false;
    // Draw
    } else if (pOneStat == pTwoStat) {
        console.log('Draw. Played cards move to limbo. Play again - same player chooses.');
        // limbo.push(pOnePlayed, pTwoPlayed);
    }
    // console.log(`Player 1 now has ${pOneHand.length} cards`);
    // console.log(`Player 2 now has ${pTwoHand.length} cards`);
    // if (pOneHand.length == 30) {
    //     console.log('Player 1 wins. End of game.');
    // } else if (pTwoHand.length == 30) {
    //     console.log('Player 2 wins. End of game.'); 
    // } 
    // play();
};

compare(5, 5);