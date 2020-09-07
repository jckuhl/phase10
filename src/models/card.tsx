import CardColor from "./color.enum";
import CardType from "./cardtype.enum";

export default class PlayCard {

    public get score(): number {
        if(this.value === CardType.WILD) {
            return 25;
        } else if(this.value === CardType.SKIP) {
            return 15;
        } else {
            return this.value >= 10 ? 10 : 5;
        };
    }

    constructor(
        public value: {},
        public color: CardColor
    ){}
}