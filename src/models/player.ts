import Phase from "./phase.enum";
import PlayerHand from "./hand";

export default class Player {
    public phase: Phase = Phase.PhaseOne;
    public turn: boolean = false;
    private _hand!: PlayerHand;

    public get score() {
        if(this.hand) {
            return this.hand.score;
        } else {
            return 0;
        }
    }

    public get hand() {
        return this._hand;
    }

    public set hand(newHand: PlayerHand) {
        if(this._hand === null) {
            this._hand = newHand;
        }
    }

    constructor(public name: string) {}
}