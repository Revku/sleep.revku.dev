import React from 'react'
import { DateTime } from "luxon";

import Box from 'components/Box/Box'
import Heading from 'components/Heading/Heading'
import Paragraph from 'components/Paragraph/Paragraph'
import Button from 'components/Button/Button'
import Times from 'components/Times/Times'

const WakeUpTime = ({ setPage }) => {
    let wakeTime = DateTime.now().setLocale('pl-PL').setZone('Europe/Warsaw');
    let times = [];
    let cycles = 0;
    wakeTime = wakeTime.plus({minutes: 15});
    
    for (let i = 0; i < 6; i++) {
        wakeTime = wakeTime.plus({minutes: 90});
        cycles++;
        times.push({
            time: wakeTime.toFormat('HH:mm'),
            cycles: cycles
        });
    }

    times.reverse();

    return (
        <Box>
            <Heading>CZAS POBUDKI</Heading>
            <Paragraph>Człowiek potrzebuje około 15 minut aby zasnąć. Jeżeli pójdziesz spać teraz, musisz obudzić się w jednym z wybranych momentów:</Paragraph>

            <Times times={times} />

            <Paragraph>Jeśli obudzisz się w jednym z tych momentów, wstaniesz między 90-minutowymi cyklami snu. Dobry sen składa się z 5-6 pełnych cykli snu.</Paragraph>

            <Button onclick={() => setPage('home')}>Powrót do strony głównej</Button>
        </Box>
    )
}

export default WakeUpTime