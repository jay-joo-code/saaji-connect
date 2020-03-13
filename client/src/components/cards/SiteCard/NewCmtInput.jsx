import React, { useState } from 'react';
import styled from 'styled-components';
import Btn from 'src/components/buttons/Btn';
import api from 'src/util/api';

const Container = styled.div`
  margin: .5rem 0;
`;

const Input = styled.input`
  margin-right: .5rem;
  font-size: 16px;
  
`;

const NewCmtInput = ({
  _id, isAdmin, v, setV,
}) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => setValue(e.target.value);

  const handleClick = () => {
    const data = { isAdmin, text: value };
    api.post(`/site/${_id}/cmt/add`, data)
      .then(() => {
        setV(v + 1);
        setValue('');
      })
      .catch(() => {});
  };

  return (
    <Container>
      <Input
        value={value}
        onChange={handleChange}
      />
      <Btn
        onClick={handleClick}
      >
        댓글
      </Btn>
    </Container>
  );
};

export default NewCmtInput;
