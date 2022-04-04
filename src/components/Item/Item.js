import React from 'react'
import styled from 'styled-components'

const StyledItem = styled.div`
    background: ${({theme}) => theme.colors.secondary};
    padding: 10px 30px;
    border-radius: 5px;
    width: 30%;
    margin: 3px;
    
    @media (max-width: 600px) {
        width: 45%;
    }
    @media (max-width: 350px) {
        width: 95%;
    }
`;

const Item = ({children}) => {
  return (
    <StyledItem>{children}</StyledItem>
  )
}

export default Item