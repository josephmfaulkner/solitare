
//Black
const Black = "BLACK";
const Spade = "♠";
const Club = "♣";
//Red
const Red = "RED";
const Heart = "♥";
const Diamond = "♦";

let SuiteScoreMap = new Map([
    [Spade,   4],
    [Heart,   3],
    [Diamond, 2],
    [Club,    1]
]);

const King  = "K";
const Queen = "Q";
const Jack  = "J";
const Ten   = "10";
const Nine  = "9";
const Eight = "8";
const Seven = "7";
const Six   = "6";
const Five  = "5";
const Four  = "4";
const Three = "3";
const Two   = "2";
const Ace   = "A";

const RankScoreMap = new Map([
    [King,  13],
    [Queen, 12],
    [Jack,  11],
    [Ten,   10],
    [Nine,  9],
    [Eight, 8],
    [Seven, 7],
    [Six,   6], 
    [Five,  5],
    [Four,  4],
    [Three, 3], 
    [Two,   2], 
    [Ace,   1]
]);


class Card 
{ 
    constructor(suite, rank)
    {
        this.Suite  = suite; 
        this.Rank   = rank; 
        this.SideUp = false;
    }

    toJSON(){
        return {
            "Suite": this.Suite,
            "Rank": this.Rank,
            "SideUp": this.SideUp,
        };
    }

    Color(){
        if(this.Suite == Spade || this.Suite == Club)
        {
            return Black;
        }
        else
        {
            return Red; 
        }
    }

    SuiteScore(){
        let suiteScore = SuiteScoreMap.get(this.Suite);
        return suiteScore;
    }

    RankScore(){
        let rankScore = RankScoreMap.get(this.Rank);
        return rankScore;
    }

    SuiteDiff(otherCard){
        return this.SuiteScore() - otherCard.SuiteScore();
    }

    RankDiff(otherCard){
        return this.RankScore() - otherCard.RankScore(); 
    }

}


//Spades
const KingOfSpades  = function(){return new Card(Spade,King)};
const QueenOfSpades = function(){return new Card(Spade,Queen)}; 
const JackOfSpades  = function(){return new Card(Spade,Jack)};
const TenOfSpades   = function(){return new Card(Spade,Ten)}; 
const NineOfSpades  = function(){return new Card(Spade,Nine)};
const EightOfSpades = function(){return new Card(Spade,Eight)};
const SevenOfSpades = function(){return new Card(Spade,Seven)};
const SixOfSpades   = function(){return new Card(Spade,Six)};
const FiveOfSpades  = function(){return new Card(Spade,Five)};
const FourOfSpades  = function(){return new Card(Spade,Four)};
const ThreeOfSpades = function(){return new Card(Spade,Three)}; 
const TwoOfSpades   = function(){return new Card(Spade,Two)};
const AceOfSpades   = function(){return new Card(Spade,Ace)};
//Clubs
const KingOfClubs  = function(){return new Card(Club,King)};
const QueenOfClubs = function(){return new Card(Club,Queen)}; 
const JackOfClubs  = function(){return new Card(Club,Jack)}; 
const TenOfClubs   = function(){return new Card(Club,Ten)};
const NineOfClubs  = function(){return new Card(Club,Nine)};
const EightOfClubs = function(){return new Card(Club,Eight)}; 
const SevenOfClubs = function(){return new Card(Club,Seven)}; 
const SixOfClubs   = function(){return new Card(Club,Six)};
const FiveOfClubs  = function(){return new Card(Club,Five)}; 
const FourOfClubs  = function(){return new Card(Club,Four)};
const ThreeOfClubs = function(){return new Card(Club,Three)};
const TwoOfClubs   = function(){return new Card(Club,Two)}; 
const AceOfClubs   = function(){return new Card(Club,Ace)};
//Hearts
const KingOfHearts  = function(){return new Card(Heart,King)};
const QueenOfHearts = function(){return new Card(Heart,Queen)}; 
const JackOfHearts  = function(){return new Card(Heart,Jack)}; 
const TenOfHearts   = function(){return new Card(Heart,Ten)};
const NineOfHearts  = function(){return new Card(Heart,Nine)};
const EightOfHearts = function(){return new Card(Heart,Eight)};
const SevenOfHearts = function(){return new Card(Heart,Seven)}; 
const SixOfHearts   = function(){return new Card(Heart,Six)};
const FiveOfHearts  = function(){return new Card(Heart,Five)}; 
const FourOfHearts  = function(){return new Card(Heart,Four)}; 
const ThreeOfHearts = function(){return new Card(Heart,Three)};
const TwoOfHearts   = function(){return new Card(Heart,Two)};
const AceOfHearts   = function(){return new Card(Heart,Ace)};
//Diamonds
const KingOfDiamonds  = function(){return new Card(Diamond,King)};
const QueenOfDiamonds = function(){return new Card(Diamond,Queen)};
const JackOfDiamonds  = function(){return new Card(Diamond,Jack)};
const TenOfDiamonds   = function(){return new Card(Diamond,Ten)};
const NineOfDiamonds  = function(){return new Card(Diamond,Nine)};
const EightOfDiamonds = function(){return new Card(Diamond,Eight)};
const SevenOfDiamonds = function(){return new Card(Diamond,Seven)};
const SixOfDiamonds   = function(){return new Card(Diamond,Six)};
const FiveOfDiamonds  = function(){return new Card(Diamond,Five)};
const FourOfDiamonds  = function(){return new Card(Diamond,Four)};
const ThreeOfDiamonds = function(){return new Card(Diamond,Three)};
const TwoOfDiamonds   = function(){return new Card(Diamond,Two)};
const AceOfDiamonds   = function(){return new Card(Diamond,Ace)};

export {
 Red, 
 Black,
 Spade,
 Club,
 Heart,
 Diamond,
 King,
 Queen,
 Jack,
 Ten,
 Nine,
 Eight,
 Seven,
 Six,
 Five,
 Four,
 Three,
 Two,
 Ace,
 KingOfSpades , 
 QueenOfSpades, 
 JackOfSpades , 
 TenOfSpades  , 
 NineOfSpades , 
 EightOfSpades, 
 SevenOfSpades, 
 SixOfSpades  , 
 FiveOfSpades , 
 FourOfSpades , 
 ThreeOfSpades, 
 TwoOfSpades  , 
 AceOfSpades  , 
 KingOfClubs , 
 QueenOfClubs, 
 JackOfClubs , 
 TenOfClubs  , 
 NineOfClubs , 
 EightOfClubs, 
 SevenOfClubs, 
 SixOfClubs  , 
 FiveOfClubs , 
 FourOfClubs , 
 ThreeOfClubs, 
 TwoOfClubs  , 
 AceOfClubs  , 
 KingOfHearts , 
 QueenOfHearts, 
 JackOfHearts , 
 TenOfHearts  , 
 NineOfHearts , 
 EightOfHearts, 
 SevenOfHearts, 
 SixOfHearts  , 
 FiveOfHearts , 
 FourOfHearts , 
 ThreeOfHearts, 
 TwoOfHearts  , 
 AceOfHearts  , 
 KingOfDiamonds , 
 QueenOfDiamonds, 
 JackOfDiamonds , 
 TenOfDiamonds  , 
 NineOfDiamonds , 
 EightOfDiamonds, 
 SevenOfDiamonds, 
 SixOfDiamonds  , 
 FiveOfDiamonds , 
 FourOfDiamonds , 
 ThreeOfDiamonds, 
 TwoOfDiamonds  , 
 AceOfDiamonds  , 
};
