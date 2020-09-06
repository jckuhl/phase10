import React from 'react';
import Card from './components/Card';
import PlayCard from './models/card';
import CardColor from './models/color.enum';
import CardType from './models/cardtype.enum';

function App() {
    const card = new PlayCard(CardType.SKIP, CardColor.RED)
    return (
        <Card card={card}></Card>
    );
}

export default App;
