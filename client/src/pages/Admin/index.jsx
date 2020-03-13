import React, { useState } from 'react';
import styled from 'styled-components';
import ToggleSites from './ToggleSites';

const Container = styled.div`
  & > input {
    margin-right: 1rem;
  }
`

const Admin = () => {
  return (
    <Container>
      <ToggleSites />
    </Container>
    )
}

export default Admin;