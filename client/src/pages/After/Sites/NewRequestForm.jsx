import React, { useState } from 'react';
import styled from 'styled-components';
import Btn from 'src/components/buttons/Btn';
import api from 'src/util/api';
import Body from 'src/components/fonts/Body';

const Container = styled.div`
  margin: 1rem 0;
`;

const Input = styled.input`
  width: 75%;
  margin-right: .5rem;
  
  @media (min-width: ${(props) => props.theme.md}px) {
    width: 400px;
  }
`;

const ErrMsg = styled(Body)`
  color: red;
`;

const isNotURL = (string) => {
  try {
    new URL(string);
    return false;
  } catch (_) {
    return true;
  }
};

const NewRequestForm = ({ v, setV }) => {
  const [val, setVal] = useState('');
  const [err, setErr] = useState();

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const handleSubmit = () => {
    const url = val.includes('http') ? val : `https://${val}`;
    if (isNotURL(url)) {
      setErr('URL을 정확히 입력해주세요.');
      return;
    }

    api.post('/site/create', { url })
      .then(() => {
        setV(v + 1);
        setErr('');
        setVal('');
      })
      .catch((e) => {
        setErr(e.response.data.msg);
      });
  };

  return (
    <Container>
      <Input
        placeholder="URL ex) https://google.com"
        value={val}
        onChange={handleChange}
      />
      <Btn type="button" onClick={handleSubmit}>요청</Btn>
      {err && <ErrMsg>{err}</ErrMsg>}
    </Container>
  );
};

export default NewRequestForm;
