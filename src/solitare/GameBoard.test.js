import * as Deck from './Deck';
import {NewGame} from './GameBoard'

it('New Game Structure',() => {

    let deck = new Deck.Deck(Deck.fullDeck());

    let newGame = NewGame(deck);

    let newGameState = newGame.toJSON(); 

    expect(newGameState["deck"]).not.toBeNull(); 
    expect(newGameState["piles"]).not.toBeNull(); 
    expect(newGameState["foundations"]).not.toBeNull(); 

});

it('New Game Structure Populated',() => {

    let deck = new Deck.Deck(Deck.fullDeck());

    let newGame = NewGame(deck);

    let newGameState = newGame.toJSON(); 

    expect(newGameState["piles"][0].length).toBe(1); 
    expect(newGameState["piles"][1].length).toBe(2);
    expect(newGameState["piles"][2].length).toBe(3);
    expect(newGameState["piles"][3].length).toBe(4);
    expect(newGameState["piles"][4].length).toBe(5);
    expect(newGameState["piles"][5].length).toBe(6);
    expect(newGameState["piles"][6].length).toBe(7);

    expect(newGameState["foundations"][0].length).toBe(0); 
    expect(newGameState["foundations"][1].length).toBe(0); 
    expect(newGameState["foundations"][2].length).toBe(0); 
    expect(newGameState["foundations"][3].length).toBe(0); 

});