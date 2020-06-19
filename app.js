let pOneHand = [];

let pTwoHand = [];

let limbo = [];

const prompt = require('prompt-sync')({sigint: true});

// Creating 30 cards

class Card {
    constructor(food, calories, fat, carbs, protein) {
        this._food = food;
        this._calories = calories;
        this._fat = fat;
        this._carbs = carbs;
        this._protein = protein;
        this._won = 0;
    }
}

let foods = [
    "broccoli",//1
    "carrot",//2
    "potato",//3
    "peanut butter",//4
    "chocolate",//5
    "avocado",//6
    "bread",//7
    "olive oil",//8
    "orange",//9
    "oreo",//10
    "ice cream",//11
    "chicken breast",//12
    "semi-skimmed milk",//13
    "egg",//14
    "beer",//15
    "butter",//16
    "oats",//17
    "rice",//18 update all values
    "quinoa",//19
    "sweet potato",//20
    "cheese",//21
    "almonds",//22
    "chia seeds",//23
    "crisps",//24
    "popcorn",//25
    "salmon",//26
    "corn flakes",//27
    "bacon",//28
    "seitan",//29
    "apple"//30
]

let fatContent = [
    0.4,//1
    0.2,//2
    0.1,//3
    50,//4
    13,//5
    15,//6
    1.5,//7
    100,//8
    0.1,//9
    20,//10
    11,//11
    3.6,//12
    2,//13
    11,//14
    0,//15
    81,//16
    6.9,//17
    0.9,//18
    1.9,//19
    0.3,//20
    32,//21
    50,//22
    31,//23
    35,//24
    4.3,//25
    14,//26
    0.4,//27
    43,//28
    1.9,//29
    0.2//30
]

let calorieContent = [
    34,//1
    43,//2
    75,//3
    589,//4
    230,//5
    160,//6
    250,//7
    884,//8
    50,//9
    480,//10
    207,//11
    165,//12
    50,//13
    155,//14
    43,//15
    717,//16
    387,//17
    349,//18
    120,//19
    87,//20
    402,//21
    579,//22
    486,//23
    525,//24
    387,//25
    420,//26
    378,//27
    548,//28
    370,//29
    50//30
]

let carbsContent = [
    7,//1
    9.6,//2
    16.8,//3
    20,//4
    26,//5
    1.9,//6
    44.3,//7
    0,//8
    12,//9
    69,//10
    24,//11
    0,//12
    4.9,//13
    1,//14
    3.6,//15
    0,//16
    60,//17
    77,//18
    21.3, //19
    21.3,//20
    0.3,//21
    13.3,//22
    42.1,//23
    30,//24
    78,//25
    0,//26
    84,//27
    0.6,//28
    14,//29
    12//30
]

let proteinContent = [
    3.7,//1
    0.9,//2
    2,//3
    25,//4
    3,//5
    2,//6
    8.5,//7
    0,//8
    0.9,//9
    5,//10
    3.5,//11
    31,//12
    3.3,//13
    13,//14
    0.5,//15
    0.9,//16
    13.15,//17
    2.6,//18
    4.4,//19
    1.6,//20
    25,//21
    29,//22
    16.5,//23
    7,//24
    11,//25
    26,//26
    7,//27
    12,//28
    75,//29
    0.6//30
]

let deck = [];

for (let i = 0; i < 30; i++) {
    deck[i] = new Card(foods[i], calorieContent[i], fatContent[i], carbsContent[i], proteinContent[i]);
}

// Shuffle function

const shuffle = (deck) => {
    for (let i = 0; i < 1000; i++) {
        let location1 = Math.floor((Math.random()*deck.length));
        let location2 = Math.floor((Math.random()*deck.length));
        let tmp = deck[location1];
		deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
    console.log("Welcome to Nutrition Top Trumps!");
    console.log("The aim of the game is to win all 30 cards in the deck by comparing the chosen nutritional value of the food items listed on both players' cards.");
    console.log("Flip a coin to begin and choose who goes first. On their turn, players choose a statistic for comparison. Whoever has the highest value on the top card of their deck wins back their own card, in addition to their opponent's.");
    console.log("If the value is the same, the cards move into the middle, or 'limbo', and players play again to decide who takes them.")
    console.log("All nutritional values listed are per 100g of each of the food items. Choose wisely!")
    console.log("NEW GAME! Deck has been shuffled");
};

shuffle(deck);

//Deal function

const deal = (deck) => {
    for (let i = 0; i < 30; i++) {
        if (i%2 == 0) {
            pOneHand.push(deck[i]);
        } else {
            pTwoHand.push(deck[i]);
        }
    }
    console.log("Cards have been dealt");
    deck.length = 0
}

deal(deck);

// Check players' hands

// console.log(pOneHand);
// console.log(pTwoHand);


// Coin flip function to choose who goes first

let coinFlipped = false;

let playerOnesTurn = "";

// Play function

const flip = () => {
    let num = Math.floor(Math.random()*2)+1;
    // Check if flipped. 1 = Heads, 2 = Tails
    // console.log(num);
    console.log('Coin has been flipped.');
    let headsOrTails = prompt('Pick one or the other. 1. Heads 2. Tails');
    headsOrTails = Number(headsOrTails);
    if (num == 1 && headsOrTails == 1) {
        console.log('Heads it is. You go first.');
        coinFlipped = true;
        playerOnesTurn = true;
    } else if (num == 2 && headsOrTails == 2) {
        console.log('Tails it is. You go first.');
        coinFlipped = true;
        playerOnesTurn = true;
    } else if ((num == 1 && headsOrTails == 2)||(num == 2 && headsOrTails == 1)) {
        console.log("Sorry, wrong answer. Computer goes first.");
        coinFlipped = true;
        playerOnesTurn = false;
    } else if (headsOrTails != 1 || headsOrTails != 2) {
        console.log("Sorry, that is not a valid choice. Flipping again.");
        flip();
    }
};

while (!coinFlipped) {
    flip();
}

// TWO PLAYER (AGAINST COMPUTER)

const play = () => {
    let pOnePlayed = pOneHand.shift();
    let pTwoPlayed = pTwoHand.shift();
    // Compare stat function
    const compare = (pOneStat, pTwoStat) => {
        console.log(pOneStat, pTwoStat);
        // P1 wins
        if (pOneStat > pTwoStat) {
            console.log('Player 1 wins');
            pOnePlayed._won++;
            pOneHand.push(pOnePlayed, pTwoPlayed);
            if (limbo.length > 0) {
                pOneHand.push(limbo[0], limbo[1]);
                limbo = [];
                console.log(`Player 1 collects the cards in limbo and now has ${pOneHand.length} cards`)
            }
            playerOnesTurn = true;
        // P2 wins
        } else if (pTwoStat > pOneStat) {
            console.log('Computer wins');
            pTwoPlayed._won++;
            pTwoHand.push(pOnePlayed, pTwoPlayed);
            if (limbo.length > 0) {
                pTwoHand.push(limbo[0], limbo[1]);
                limbo = [];
                console.log(`Player 1 collects the cards in limbo and now has ${pOneHand.length} cards`)
            }
            playerOnesTurn = false;
        // Draw
        } else if (pOneStat == pTwoStat) {
            console.log('Draw. Played cards move to limbo. Play again - same player chooses.');
            limbo.push(pOnePlayed, pTwoPlayed);
        }
        console.log(`Player 1 now has ${pOneHand.length} cards`);
        console.log(`Computer now has ${pTwoHand.length} cards`);
        if (pOneHand.length != 30 && pTwoHand.length != 30) {
            console.log('Next round.');
            play();
        } else if (pOneHand.length == 30) {
            console.log('Player 1 wins. End of game.');
        } else if (pTwoHand.length == 30) {
            console.log('Computer wins. End of game.'); 
        } 
    };
    // Player One's Turn
    if (playerOnesTurn) {
        console.log("Player 1 chooses the statistic this time.");
        console.log(`You have played ${JSON.stringify(pOnePlayed)}.`);
        let chosenStat = prompt('Which statistic would you like to play? 1. Calories 2. Fat 3. Carbs 4. Protein');
        if (chosenStat == 1){
            console.log(`You chose calories. Computer's card was ${JSON.stringify(pTwoPlayed)}.`);
            compare(pOnePlayed._calories, pTwoPlayed._calories);
        } else if (chosenStat == 2) {
            console.log(`You chose fat. Computer's card was ${JSON.stringify(pTwoPlayed)}.`);
            compare(pOnePlayed._fat, pTwoPlayed._fat);
        } else if (chosenStat == 3) {
            console.log(`You chose carbs. Computer's card was ${JSON.stringify(pTwoPlayed)}.`);
            compare(pOnePlayed._carbs, pTwoPlayed._carbs);
        } else if (chosenStat == 4) {
            console.log(`You chose protein. Computer's card was ${JSON.stringify(pTwoPlayed)}.`);
            compare(pOnePlayed._protein, pTwoPlayed._protein);        
        } else {
            console.log("Sorry, that is not a valid option. Try again.");
            chosenStat = prompt('Which statistic would you like to play? 1. Fat content 2. Calories');
            // add loop
        }
    // Computer's turn
    } else if (!playerOnesTurn) {
        console.log("Computer chooses the statistic this time.");
        console.log(`Computer has played ${JSON.stringify(pTwoPlayed)}`);
        let chosenStat = Math.floor(Math.random()*2)+1;
        if (chosenStat == 1){
            console.log(`Computer chose calories. Player 1's card was ${JSON.stringify(pOnePlayed)}.`);
            compare(pOnePlayed._calories, pTwoPlayed._calories);
        } else if (chosenStat == 2) {
            console.log(`Computer chose fat. Player 1's card was ${JSON.stringify(pOnePlayed)}.`);
            compare(pOnePlayed._fat, pTwoPlayed._fat);
        } else if (chosenStat == 3) {
            console.log(`Computer chose carbs. Player 1's card was ${JSON.stringify(pOnePlayed)}.`);
            compare(pOnePlayed._carbs, pTwoPlayed._carbs);
        } else if (chosenStat == 4) {
            console.log(`Computer chose protein. Player 1's card was ${JSON.stringify(pOnePlayed)}.`);
            compare(pOnePlayed._protein, pTwoPlayed._protein);        
        } 
    }
};

play();