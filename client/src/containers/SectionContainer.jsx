import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 3rem 0;
  padding: 1rem 0;
`;

const PageContainer = ({ children, ...rest }) => (
  <Container {...rest}>
    {children}
  </Container>
);

export default PageContainer;
