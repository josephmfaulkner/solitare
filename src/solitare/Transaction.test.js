import { NewGame } from './GameBoard';
import { Deck, fullDeck } from './Deck';
import { T_DrawCard } from './Transaction';

let deckOfCards;
let gameBoard; 

beforeAll(() => {
    deckOfCards = new Deck(fullDeck());
    gameBoard   = NewGame(deckOfCards);
});

it('Draw a card', () => {
    let topCardBefore  = gameBoard.Deck.TopCard(); 
    let deckLengthBefore = gameBoard.Deck.Cards.length; 

    let drawCard = new T_DrawCard(gameBoard);
    drawCard.execute(); 

    expect(drawCard.Success()).toBe(true);
    
    let newDeckLength = gameBoard.Deck.Cards.length; 
    let newTopCard = gameBoard.Deck.TopCard(); 
    let bottomCard = gameBoard.Deck.Cards[gameBoard.Deck.Cards.length -1 ];


    expect(newDeckLength).toBe(deckLengthBefore); 
    expect(newTopCard).not.toBe(topCardBefore);
    expect(bottomCard).toBe(topCardBefore);
})
