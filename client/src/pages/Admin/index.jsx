import React, { useState } from 'react';
import styled from 'styled-components';
import Btn from 'src/components/buttons/Btn';

const Container = styled.div`
  & > input {
    margin-right: 1rem;
  }
`

const Admin = () => {
  const [val, setVal] = useState('');
  
  const handleChange = (e) => setVal(e.target.value);
  
  const handleSubmit = () => {
    // TODO
  }
  
  return (
    <Container>
      <input
        value={val}
        onChange={handleChange}
      />
      <Btn onClick={handleSubmit}>verify</Btn>
    </Container>
    )
}

export default Admin;