import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  width: 100%;
  
  @media (min-width: ${props => props.theme.md}px) {
    display: flex;
    justify-content: center;
  }
`

const Inner = styled.div`
  width: 100%;
  
  @media (min-width: ${props => props.theme.md}px) {
    width: 60%;
  }
`

const PageContainer = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <Inner>
        {children}
      </Inner>
    </Container>
    )
}

export default PageContainer;