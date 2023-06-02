import React from 'react'
import styled from 'styled-components';
import Item from 'components/Item/Item'

const Wrapper = styled.div`
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    margin: 15px 0;
    justify-content: center;
`;

const Times = ({times}) => {
  return (
    <Wrapper>
        {times.map((time, index) => {
            return (
                <Item key={index} cycles={time.cycles}>{time.time}</Item>
            )
        })}
    </Wrapper>
  )
}

export default Times