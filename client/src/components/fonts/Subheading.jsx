import React from 'react';
import styled from 'styled-components';

const Container = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.pmy};
  font-weight: bold;
`;

const Subheading = ({ children, ...rest }) => (
  <Container {...rest}>
    {children}
  </Container>
);

export default Subheading;
