import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    background: ${({ theme }) => theme.colors.boxBackground};
    color: ${({ theme }) => theme.colors.text};
    padding: 70px 50px;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 800px) {
      border-radius: 0;
      padding: 50px 20px;
      border-bottom: 1px solid gray;
      margin-bottom: 15px;
    }
`;

const Box = ({children}) => {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  )
}

export default Box