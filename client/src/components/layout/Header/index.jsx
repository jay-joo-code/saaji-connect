import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  border-top: 5px solid ${(props) => props.theme.pmy};
`

const Header = () => {
  return (
    <Container />
    )
}

export default Header;