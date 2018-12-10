class Pile
{
    constructor()
    {
        this.Cards = []; 
    }

    push(newCard){
        this.Cards.unshift(newCard);
    }

    pop(){
        if(this.Cards.length <= 0)
        {
            return null; 
        }
        let topCard = this.Cards[0];
        this.Cards.shift(); 
        return topCard; 
    }
}

export default Pile; 