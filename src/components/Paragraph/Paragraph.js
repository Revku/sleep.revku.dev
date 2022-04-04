import React from 'react'
import styled from 'styled-components'

const StyledParagraph = styled.p`
    margin: 20px 0;
    max-width: 480px;
`;

const Paragraph = ({children}) => {
  return (
    <StyledParagraph>{children}</StyledParagraph>
  )
}

export default Paragraph