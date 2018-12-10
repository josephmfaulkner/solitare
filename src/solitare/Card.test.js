import * as Card from './Card';

it ('Get Card Suite', () => {
    let card = Card.AceOfSpades(); 
    expect(card.Suite).toBe(Card.Spade);
});

it ('Get Card Rank', () => {
    let card = Card.AceOfSpades(); 
    expect(card.Rank).toBe(Card.Ace);
});

it ('Get Card Color Red', () => {
    let card = Card.AceOfHearts(); 
    expect(card.Color()).toBe(Card.Red);
});

it ('Get Card Color Black', () => {
    let card = Card.AceOfClubs(); 
    expect(card.Color()).toBe(Card.Black);
});

it ('Get Suite Score', () => {
    let card = Card.AceOfSpades();
    expect(card.SuiteScore()).toBe(4);
});

it ('Get Rank Score', () => {
    let card = Card.AceOfSpades();
    expect(card.RankScore()).toBe(1);
});


it ('Suite Diff', () => {
    let cardOne = Card.AceOfSpades();
    let cardTwo = Card.AceOfDiamonds();
    expect(cardOne.SuiteDiff(cardTwo)).toBe(2);
});

it ('Suite Diff (Same)', () => {
    let cardOne = Card.AceOfSpades();
    let cardTwo = Card.AceOfSpades();
    expect(cardOne.SuiteDiff(cardTwo)).toBe(0);
});


it ('Rank Diff ', () => {
    let cardOne = Card.KingOfSpades(); 
    let cardTwo = Card.AceOfSpades();
    expect(cardOne.RankDiff(cardTwo)).toBe(12);
});

it ('Rank Diff (Same)', () => {
    let cardOne = Card.AceOfSpades();
    let cardTwo = Card.AceOfClubs();
    expect(cardOne.RankDiff(cardTwo)).toBe(0);
});
