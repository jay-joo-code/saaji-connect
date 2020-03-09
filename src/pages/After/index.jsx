import React from 'react';
import styled from 'styled-components';
import Browsers from './Browsers';
import Retry from './Retry';

const Container = styled.div`

`;

const After = () => {
  
  return (
    <Container>
      <Retry />
      <Browsers />
    </Container>
  )
};

export default After;
