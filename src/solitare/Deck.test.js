import * as Deck from './Deck';

let deck; 

beforeEach(() => {
    deck = new Deck.Deck(Deck.fullDeck()); 
})

it ('New Deck', () => {
    expect(deck.Cards).not.toBeNull();
});

it ('New Deck Cards Length', () => {
    expect(deck.Cards.length).toBe(52);
});

it ('Deck Next Card Length', () => {
    deck.getNextCard(); 
    expect(deck.Cards.length).toBe(52);
});

it ('Deck Next Card', () => {
    let card = deck.TopCard();
    deck.getNextCard(); 
    let cardAtEnd = deck.Cards[deck.Cards.length - 1];
    
    expect(cardAtEnd).toBe(card);
});

it ('Deck Next Card', () => {
    let card = deck.TopCard();
    deck.getNextCard(); 
    let cardAtEnd = deck.Cards[deck.Cards.length - 1];
    
    expect(cardAtEnd).toBe(card);
});

it ('Deck Draw Card', () => {
    let cardTop = deck.TopCard();
    let cardDraw = deck.drawTopCard();

    expect(cardDraw).toBe(cardTop);
    expect(deck.Cards.length).toBe(51);
});

it ('ShuffleDeck', () => {
    let deckOne = new Deck.Deck(Deck.fullDeck()); 
    let deckTwo = new Deck.Deck(Deck.fullDeck()); 
    deckTwo.shuffle();
    expect(deckOne.Cards.length).toBe(deckTwo.Cards.length);
    let cardOne = deckOne.TopCard();
    let cardTwo = deckTwo.TopCard();

    expect(cardOne).not.toBe(cardTwo);

    console.log(deckTwo.Cards);
});

