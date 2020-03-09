import React from 'react';
import styled from 'styled-components';

const Container = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme.pmy};
  font-weight: bold;
  padding-bottom: .5rem;
`

const Heading = ({ children, ...rest}) => {
  return (
    <Container {...rest}>
      {children}
    </Container>
    )
}

export default Heading;