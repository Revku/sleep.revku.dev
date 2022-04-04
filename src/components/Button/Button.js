import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    border: none;
    background: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.text};
    padding: 12px 30px;
    font-size: 14px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    border-radius: 5px;
    cursor: pointer;
`;

const Button = ({children, onclick}) => {
  return (
    <StyledButton onClick={onclick}>{children}</StyledButton>
  )
}

export default Button