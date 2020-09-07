import PlayCard from "./card";
import CardType from "./cardtype.enum";
import CardColor from "./color.enum";
import getEnumByValue from "../utilities/getenumbyvalue";

export default class Deck {
    private cards: PlayCard[] = [];

    public get length() {
        return this.cards.length;
    }
    
    constructor() {
        let colorNum = 0;
        const colorSwitch: { [key: number]: CardColor} = {
            0: CardColor.RED,
            1: CardColor.GREEN,
            2: CardColor.YELLOW,
            3: CardColor.BLUE
        }
        for(let i = 1; this.cards.length < 56; i++) {
            if(i % 15 === 0) {
                colorNum += 1;
                i = 1;
            }
            if(i >= 13) {
                this.cards.push(new PlayCard(i, CardColor.BLACK));
            } else {
                this.cards.push(new PlayCard(i, colorSwitch[colorNum]));
            }
        }
    }

    public map<T>(callbackfn: (value: PlayCard, index: number, array: PlayCard[]) => T): T[] {
        return this.cards.map(callbackfn);
    }
}