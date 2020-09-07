import React from 'react';
import styled from 'styled-components';
import PlayerHand from '../models/hand';
import Card from './Card';

const FlexHand = styled.div`
    display: flex;
`;

export default function Hand({ hand }: { hand: PlayerHand }) {
    return <FlexHand>
        {hand.map((card, index) => <Card key={index} card={card}></Card>)}
    </FlexHand>
}