import PlayerCard from './card';
import CardGroup from './cardgroup';

export default class PlayerHand extends CardGroup {

    public get score(): number {
        return this.map(card => card.score).reduce((a, b) => a + b)
    }

    constructor(cards: PlayerCard[]) {
        super();
        this.cards = cards;
    }
}