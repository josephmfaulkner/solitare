class Transaction
{
    constructor(gameBoard){
        this._gameBoard = gameBoard; 
        this._success = false; 
        this._message = null; 
    }

    Success(){ return this._success; }
    Message(){ return this._message; }

    execute(){
        //
    }

}

//draw
class T_DrawCard extends Transaction
{
    constructor(gameBoard){
        super(gameBoard);
    }

    execute(){
        this._gameBoard.Deck.getNextCard(); 
        this._success = true; 
    }

}

//move deck to pile <index>

//move deck to foundation <index>

//move pile <index> to foundation <index>

//move pile <index> <index> to pile <index>

//move foundation <index> to pile <index>

export {T_DrawCard};