import PlayerCard from './card';
import CardGroup from './cardgroup';

export default class PlayerHand extends CardGroup {

    constructor(cards: PlayerCard[]) {
        super();
        this.cards = cards;
    }
}