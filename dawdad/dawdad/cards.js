const suits = [ 'Hearts', 'Diamonds', 'Spades', 'Clubs' ];
const nums = [ ...new Array(9) ].map((_, i) => String(i + 2));
const faces = [ 'J', 'Q', 'K', 'A' ];

const allValues = [ ...nums, ...faces ];

// key = suit, value = remaining cards
const remainingCards = {};


const shuffleCards = () => {
    suits.forEach(suit => {
        remainingCards[suit] = allValues;
    });
}

shuffleCards();

const drawCard = () => {
    const remainingSuits = Object.keys(remainingCards);
    if (remainingSuits.length === 0) {
        console.log('All cards drawn!');
        console.log('Shuffling...');

        shuffleCards();
        console.log('Cards shuffled!');
        return;
    }
    const suitIndex = Math.floor(Math.random() * remainingSuits.length);
    const drawnSuit = remainingSuits[suitIndex];

    const valueIndex = Math.floor(Math.random() * remainingCards[drawnSuit].length);
    const drawnValue = remainingCards[drawnSuit][valueIndex];

    const drawnCard = `${drawnValue} of ${drawnSuit}`;

    // cleanup
    remainingCards[drawnSuit] = [
        ...remainingCards[drawnSuit].slice(0, valueIndex),
        ...remainingCards[drawnSuit].slice(valueIndex + 1)
    ];

    if (remainingCards[drawnSuit].length === 0) {
        delete remainingCards[drawnSuit];
    }

    console.log(drawnCard);
}

const drawButton = document.getElementById('drawButton');
drawButton.addEventListener('click', drawCard);