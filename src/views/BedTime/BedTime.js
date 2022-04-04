import React from 'react'
import { DateTime } from "luxon";
import styled from 'styled-components';

import Box from 'components/Box/Box'
import Heading from 'components/Heading/Heading'
import Paragraph from 'components/Paragraph/Paragraph'
import Item from 'components/Item/Item'
import Button from 'components/Button/Button'

const Times = styled.div`
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const BedTime = ({time, setPage}) => {
    let bedTime = DateTime.fromISO(time).setLocale('pl-PL').setZone('Europe/Warsaw');
    let times = [];
    bedTime = bedTime.minus({minutes: 15});
    
    for (let i = 0; i < 6; i++) {
        bedTime = bedTime.minus({minutes: 90});
        times.push(bedTime.toFormat('HH:mm'));
    }
    
    return (
        <Box>
            <Heading>PORA SNU</Heading>
            <Paragraph>Człowiek potrzebuje około 15 minut aby zasnąć. Żeby obudzić się o 6:30, musisz położyć się spać o wybranych godzinach:</Paragraph>

            <Times>
                {times.map((time, index) => {
                    return (
                        <Item key={index}>{time}</Item>
                    )  
                })}
            </Times>

            <Paragraph>Jeśli obudzisz się w jednym z tych momentów, wstaniesz między 90-minutowymi cyklami snu. Dobry sen składa się z 5-6 pełnych cykli snu.</Paragraph>

            <Button onclick={() => setPage('home')}>Powrót do strony głównej</Button>
        </Box>
    )
}

export default BedTime