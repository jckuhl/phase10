import PlayCard from "./card";
import CardColor from "./color.enum";
import PlayerHand from "./hand";
import CardGroup from "./cardgroup";

export default class Deck extends CardGroup {
    
    constructor() {
        super();
        let colorNum = 0;
        const colorSwitch: { [key: number]: CardColor} = {
            0: CardColor.RED,
            1: CardColor.GREEN,
            2: CardColor.YELLOW,
            3: CardColor.BLUE
        }
        for(let i = 1; this.cards.length < 96; i++) {
            if(i % 13 === 0) {
                colorNum += 1;
                i = 1;
            }
            this.cards.push(new PlayCard(i, colorSwitch[colorNum]));
            this.cards.push(new PlayCard(i, colorSwitch[colorNum]));
        }
        const skips: PlayCard[] = new Array(4).fill(new PlayCard(13, CardColor.BLACK), 0, 4);
        const wilds: PlayCard[] = new Array(8).fill(new PlayCard(14, CardColor.BLACK), 0, 8);
        console.log({ skips, wilds});
        this.cards = this.cards.concat(skips)
            .concat(wilds)
            .sort((a, b) => Math.random() - 0.5);
    }

    public drawTopCard(): PlayCard | undefined {
        return this.cards.shift();
    }

    public addCard(card: PlayCard | PlayCard[]) {
        if(Array.isArray(card)) {
            this.cards.concat(card);
        } else {
            this.cards.push(card);
        }
    }

    public drawHand(count: number): PlayerHand {
        const cards = this.cards.splice(0, count);
        return new PlayerHand(cards);
    }
}