import React from 'react'
import styled from 'styled-components'

import revkulogo from 'assets/images/revku-logo.svg'

const Wrapper = styled.div`
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    padding: 20px 0;
`;

const Logo = styled.img`
    margin-left: 10px;
    transform: translateY(5px);
`;

const Footer = () => {
  return (
    <Wrapper>
        Powered by <Logo src={revkulogo} />
    </Wrapper>
  )
}

export default Footer