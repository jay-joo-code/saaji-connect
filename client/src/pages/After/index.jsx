import React from 'react';
import styled from 'styled-components';
import Browsers from './Browsers';
import Retry from './Retry';
import Sites from './Sites';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  
  @media (min-width: ${props => props.theme.md}px) {
    width: 70%;
  }
`

const After = () => {
  
  return (
    <Container>
    <Content>
      <Retry />
      <Browsers />
      <Sites />
    </Content>
    </Container>
  )
};

export default After;
