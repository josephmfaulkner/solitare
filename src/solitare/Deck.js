import * as Card from './Card';

const fullDeck = function() {
return [
    Card.KingOfSpades(), 
    Card.QueenOfSpades(), 
    Card.JackOfSpades(),
    Card.TenOfSpades(),
    Card.NineOfSpades(),
    Card.EightOfSpades(),
    Card.SevenOfSpades(),
    Card.SixOfSpades(),
    Card.FiveOfSpades(),
    Card.FourOfSpades(),
    Card.ThreeOfSpades(),
    Card.TwoOfSpades(),
    Card.AceOfSpades(),
    Card.KingOfClubs(),
    Card.QueenOfClubs(),
    Card.JackOfClubs(),
    Card.TenOfClubs(),
    Card.NineOfClubs(),
    Card.EightOfClubs(),
    Card.SevenOfClubs(),
    Card.SixOfClubs(),
    Card.FiveOfClubs(),
    Card.FourOfClubs(),
    Card.ThreeOfClubs(),
    Card.TwoOfClubs(),
    Card.AceOfClubs(),
    Card.KingOfHearts(),
    Card.QueenOfHearts(),
    Card.JackOfHearts(), 
    Card.TenOfHearts(),
    Card.NineOfHearts(),
    Card.EightOfHearts(),
    Card.SevenOfHearts(),
    Card.SixOfHearts(),
    Card.FiveOfHearts(),
    Card.FourOfHearts(),
    Card.ThreeOfHearts(),
    Card.TwoOfHearts(),
    Card.AceOfHearts(),
    Card.KingOfDiamonds(),
    Card.QueenOfDiamonds(),
    Card.JackOfDiamonds(),
    Card.TenOfDiamonds(),
    Card.NineOfDiamonds(),
    Card.EightOfDiamonds(),
    Card.SevenOfDiamonds(),
    Card.SixOfDiamonds(),
    Card.FiveOfDiamonds(),
    Card.FourOfDiamonds(),
    Card.ThreeOfDiamonds(),
    Card.TwoOfDiamonds(),
    Card.AceOfDiamonds()
];
}

class Deck {
    constructor(cards)
    {
        this.Cards = cards; 
    }

    TopCard()
    {
        if(this.Cards.length <= 0)
        {
            return null; 
        }

        return this.Cards[0];
    }

    getNextCard()
    {
        if(this.Cards.length <= 0)
        {
            return null; 
        }
        let cardToBack = this.Cards[0];
        this.Cards.shift(); 
        this.Cards.push(cardToBack);
        
        return this.Cards[0];
    }

    pullTopCard()
    {
        if(this.Cards.length <= 0)
        {
            return null; 
        }
        let topCard = this.Cards[0];
        this.Cards.shift(); 
        return topCard; 
    }

    

}

export { Deck, fullDeck }; 