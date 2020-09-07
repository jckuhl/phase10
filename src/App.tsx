import React from 'react';
import Deck from './models/deck';
import Hand from './components/Hand';
import Card from './components/Card';

function App() {
    const deck = new Deck();
    //const hand = deck.drawHand(10);
    return (<React.Fragment>
        {deck.map((card, index) => <Card key={index} card={card}></Card>)}
    </React.Fragment>
    );
}

export default App;
