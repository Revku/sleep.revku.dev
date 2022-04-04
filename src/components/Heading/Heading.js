import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.h2`
    font-weight: 800;
    font-size: 20px;
    letter-spacing: 0.17em;
    font-weight: ${({ theme }) => theme.font.weight.extrabold};

    background: ${({ theme }) => theme.colors.textGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

const Heading = ({children}) => {
  return (
    <StyledHeading>{children}</StyledHeading>
  )
}

export default Heading