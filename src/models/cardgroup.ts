import PlayCard from "./card";

export default class CardGroup {

    public get length() {
        return this.cards.length;
    }

    protected cards: PlayCard[] = [];

    public map<T>(callbackfn: (value: PlayCard, index: number, array: PlayCard[]) => T): T[] {
        return this.cards.map(callbackfn);
    }
}