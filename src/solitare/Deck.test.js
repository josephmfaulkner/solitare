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

it ('Deck Pull Card', () => {
    
});
