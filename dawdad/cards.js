var deck = ["2 Heart", "3 Heart", "4 Heart", "5 Heart",
            "2 Spade", "3 Spade", "4 Spade", "5 Spade",
            "2 Club", "3 Club", "4 Club", "5 Club",
            "2 Diamond", "3 Diamond", "4 Diamond", "5 Diamond"];

var chosenCards = [];

function drawCard() {
    var randomNum = Math.floor(Math.random() * deck.length);
    var card = deck[randomNum];
    deck.splice(randomNum, 1);
    if (deck.length === 0) {
        deck = chosenCards;
        chosenCards = []
        return console.log("cards shuffled, draw again.");
    } else {
        chosenCards.unshift(card);
        return console.log(chosenCards[0]);
    }
}

