var deck = ["2 Heart", "3 Heart", "4 Heart", "5 Heart",
            "2 Spade", "3 Spade", "4 Spade", "5 Spade",
            "2 Club", "3 Club", "4 Club", "5 Club",
            "2 Diamond", "3 Diamond", "4 Diamond", "5 Diamond"];

var chosenCards = [];


function number() {
    return Math.floor(Math.random() * deck.length);
}


function shuffleDeck(array) {
    array.sort(function(a, b) {return 0.5 - Math.random()});

    deck = chosenCards
}


function drawCard() {
    var randomNum = number();

    if (deck === null) {
        deck = chosenCards;
        shuffleDeck(deck);
        return console.log("cards shuffled, draw again.")
    } else {
        chosenCards.push(deck.splice(randomNum, 1))
        return console.log(chosenCards[0]);
    }
}
