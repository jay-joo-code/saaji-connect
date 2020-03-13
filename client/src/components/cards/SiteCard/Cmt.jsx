import React from 'react';
import styled from 'styled-components';
import Body from 'src/components/fonts/Body';
import formatDate from 'src/util/helpers/formatDate';
import Btn from 'src/components/buttons/Btn';

const Container = styled.div`
  margin: .2rem 0;
  display: flex;
  align-items: center;
  
  & > button {
    margin-right: .5rem;
  }
`;

const Muted = styled.span`
  opacity: .8;
  font-size: .8rem;
`;

const Cmt = ({ cmt }) => {
  const date = formatDate(cmt.createdAt);
  return (
    <Container>
      {cmt.isAdmin && <Btn size="sm">Admin</Btn>}
      <Body>
        {cmt.text}
        {' '}
        -
        {' '}
        <Muted>{date}</Muted>
      </Body>
    </Container>
  );
};

export default Cmt;
