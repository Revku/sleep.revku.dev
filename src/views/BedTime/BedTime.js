import React from 'react'
import { DateTime } from "luxon";
import styled from 'styled-components';

import Box from 'components/Box/Box'
import Heading from 'components/Heading/Heading'
import Paragraph from 'components/Paragraph/Paragraph'
import Button from 'components/Button/Button'
import Times from 'components/Times/Times'

const BedTime = ({time, setPage}) => {
    let bedTime = DateTime.fromISO(time).setLocale('pl-PL').setZone('Europe/Warsaw');
    let times = [];
    bedTime = bedTime.minus({minutes: 15});
    
    for (let i = 0; i < 6; i++) {
        bedTime = bedTime.minus({minutes: 90});
        times.push(bedTime.toFormat('HH:mm'));
    }

    times.reverse();
    
    return (
        <Box>
            <Heading>CZAS SNU</Heading>
            <Paragraph>Człowiek potrzebuje około 15 minut aby zasnąć. Żeby obudzić się o {time}, musisz położyć się spać o wybranych godzinach:</Paragraph>

            <Times times={times} />

            <Paragraph>Jeśli pójdziesz spać w jednym z tych momentów, wstaniesz między 90-minutowymi cyklami snu. Dobry sen składa się z 5-6 pełnych cykli snu.</Paragraph>

            <Button onclick={() => setPage('home')}>Powrót do strony głównej</Button>
        </Box>
    )
}

export default BedTime