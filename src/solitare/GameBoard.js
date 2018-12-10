import { Deck } from './Deck';
import Pile from './Pile';
import Foundation from './Foundation';

class GameBoard
{
    constructor(deckOfCards){
        this.Deck = deckOfCards;
        this.Deck.shuffle(); 
        this.Piles = [new Pile(),new Pile(),new Pile(),new Pile(),new Pile(),new Pile(),new Pile()]; 
        this.Foundations = [new Foundation(),new Foundation(),new Foundation(),new Foundation()]; 
        this._dealCards(); 
    }

    _dealCards(){
        for(let i = 0; i < this.Piles.length; i++)
        {
            for(let j = 0; j <= i; j++)
            {
                let card = this.Deck.drawTopCard();
                if(j == i) { card.SideUp = true; }
                this.Piles[i].push(card);
            }
        }
    }



    toJSON(){
        return {
            "deck": this.Deck.Cards, 
            "piles": [
                this.Piles[0].Cards,
                this.Piles[1].Cards,
                this.Piles[2].Cards,
                this.Piles[3].Cards,
                this.Piles[4].Cards,
                this.Piles[5].Cards,
                this.Piles[6].Cards
            ],
            "foundations": [
                this.Foundations[0].Cards,
                this.Foundations[1].Cards,
                this.Foundations[2].Cards,
                this.Foundations[3].Cards
            ]
        }
    }

}

const NewGame = function(deckOfCards)
{
    let gameBoard = new GameBoard(deckOfCards); 

    return gameBoard; 
}

export { NewGame };