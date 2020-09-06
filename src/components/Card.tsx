import React from 'react';
import styled from 'styled-components';
import PlayCard from '../models/card';
import CardColor from '../models/color.enum';
import Rotation from '../models/angle.enum';
import CardType from '../models/cardtype.enum';

const Cardgrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 50px);
    grid-template-rows: repeat(4, 50px);
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px;
    width: 150px;
    background: white;
`;

interface CornerNumberProps {
    color: CardColor,
    rotation: Rotation
}
const CornerNumber = styled.div`
    background-color: ${(props: CornerNumberProps) => props.color};
    transform: ${(props: CornerNumberProps) => 'rotate(' + props.rotation + ')'};
    grid-column-start: span 3;
    align-self: center;
    height: 50px;
    font-size: 32px;
    color: white;
`;

const MiddleNumber = styled.div`
    grid-column-start: span 3;
    grid-row-start: span 2;
    align-self: center;
    text-align: center;
    font-size: 64px;
    color: ${(props: {textcolor?: CardColor}) => props.textcolor};
`;

const LetterSpan = styled.span`
    color: ${(props: {color: CardColor}) => props.color};
`;

function RainbowLetters({ word }: {word: string}) {
    const letters = word.split('');
    return <React.Fragment>
        {letters.map((letter, index) => {
            const letterColors: { [key: number]: JSX.Element} = {
                0: <LetterSpan color={CardColor.RED}>{letter}</LetterSpan>,
                1: <LetterSpan color={CardColor.GREEN}>{letter}</LetterSpan>,
                2: <LetterSpan color={CardColor.YELLOW}>{letter}</LetterSpan>,
                3: <LetterSpan color={CardColor.BLUE}>{letter}</LetterSpan>
            };
            return letterColors[index % 4];
        })}
    </React.Fragment>     
}

export default function Card({ card }: { card: PlayCard }) {
    if(card.value === CardType.SKIP || card.value === CardType.WILD) {
        return (<Cardgrid>
            <CornerNumber color={CardColor.BLACK} rotation={Rotation.DEFAULT}>
                <RainbowLetters word={card.value}/>
            </CornerNumber>
            <MiddleNumber>
                <RainbowLetters word={card.value}/>
            </MiddleNumber>
            <CornerNumber color={CardColor.BLACK} rotation={Rotation.LEFT}>
                <RainbowLetters word={card.value}/>
            </CornerNumber>
        </Cardgrid>)
    } else {
        return (<Cardgrid>
            <CornerNumber color={card.color} rotation={Rotation.DEFAULT}>{card.value}</CornerNumber>
            <MiddleNumber textcolor={card.color}>{card.value}</MiddleNumber>
            <CornerNumber color={card.color} rotation={Rotation.LEFT}>{card.value}</CornerNumber>
        </Cardgrid>)
    }
}