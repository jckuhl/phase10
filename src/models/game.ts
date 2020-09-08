import Player from "./player";
import Deck from "./deck";

export default class Game {
    public drawPile = new Deck();
    public discardPile = new Deck();

    public get currentPlayer(): Player {
        return this.players.filter(player => player.turn)[0];
    }
    
    constructor(private players: Player[]) {
        this.drawPile.populate();
        this.players.forEach(player => {
            player.hand = this.drawPile.drawHand(10);
        });
        this.discardPile.addCard(this.drawPile.drawTopCard())
        this.setTurn(this.players[0]);
    }

    public setTurn(player: Player) {
        this.players.forEach(player => player.turn = false);
        player.turn = true;
    }

    public getPlayerScore(player: Player) : number {
        return player.score;
    }
}