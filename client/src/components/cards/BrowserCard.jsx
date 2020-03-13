import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  display: inline-box;
  padding: 1rem;
  background: white;
  
  & > svg {
    height: 80px;
    width: 80px;
  }
`;

const BrowserCard = ({ icon }) => (
  <Container>
    {icon}
  </Container>
);

export default BrowserCard;
