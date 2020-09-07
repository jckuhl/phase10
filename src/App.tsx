import React from 'react';
import Card from './components/Card';
import PlayCard from './models/card';
import CardColor from './models/color.enum';
import CardType from './models/cardtype.enum';
import Deck from './models/deck';

function App() {
    const deck = new Deck();
    return (<React.Fragment>
        {deck.map((card, index) => <Card key={index} card={card}></Card>)}
    </React.Fragment>
    );
}

export default App;
