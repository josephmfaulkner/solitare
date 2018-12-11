import { Deck } from './Deck';
import Pile from './Pile';
import Foundation from './Foundation';

class GameBoard
{
    constructor(deckOfCards){
        this.Deck = deckOfCards;
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

    _cardsToJSON(arrayOfCards){

    }

    toJSON(){
        return {
            "deck": this.Deck.Cards.map(function(card){return card.toJSON()}), 
            "piles": [
                this.Piles[0].Cards.map(function(card){return card.toJSON()}),
                this.Piles[1].Cards.map(function(card){return card.toJSON()}),
                this.Piles[2].Cards.map(function(card){return card.toJSON()}),
                this.Piles[3].Cards.map(function(card){return card.toJSON()}),
                this.Piles[4].Cards.map(function(card){return card.toJSON()}),
                this.Piles[5].Cards.map(function(card){return card.toJSON()}),
                this.Piles[6].Cards.map(function(card){return card.toJSON()})
            ],
            "foundations": [
                this.Foundations[0].Cards.map(function(card){return card.toJSON()}),
                this.Foundations[1].Cards.map(function(card){return card.toJSON()}),
                this.Foundations[2].Cards.map(function(card){return card.toJSON()}),
                this.Foundations[3].Cards.map(function(card){return card.toJSON()})
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