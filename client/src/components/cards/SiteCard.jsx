import React from 'react';
import styled from 'styled-components';
import Body from 'src/components/fonts/Body';
import Btn from 'src/components/buttons/Btn';
import api from 'src/util/api';
import useLocalStorage from 'src/util/hooks/useLocalStorage';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  opactiy: .9;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
`

const Col = styled.div`

`

const Url = styled(Body)`
  font-weight: bold;
`

const DateString = styled(Body)`
  opacity: .7;
`

const Site = ({ site, v, setV, canToggle }) => {
  const date = new Date(site.createdAt).toLocaleDateString('en-US', { timeZone: 'UTC' });
  const btnText = site.solved ? '해결' : '대기';
  
  const handleClick = () => {
    if (canToggle) {
      api.post(`/site/${site._id}/toggle-solved`)
        .then(() => setV(v + 1))
        .catch(() => {})
    }
  }
  
  return (
    <Container>
      <Col>
        <Url>{site.url}</Url>
        <DateString>{date}</DateString>
      </Col>
      <Btn
        color={site.solved ? 'success' : 'danger'}
        onClick={handleClick}
      >
        {btnText}
      </Btn>
    </Container>
    )
}

export default Site;