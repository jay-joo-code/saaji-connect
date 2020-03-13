import React, { useState } from 'react';
import styled from 'styled-components';
import SectionContainer from 'src/containers/SectionContainer';
import Heading from 'src/components/fonts/Heading';
import Body from 'src/components/fonts/Body';
import Btn from 'src/components/buttons/Btn';
import SitesList from './SitesList';
import NewRequestForm from './NewRequestForm';

const SHeading = styled(Heading)`
  margin: 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Sites = () => {
  const [exp, setExp] = useState(false);
  const [v, setV] = useState(0);

  const handleClick = () => {
    setExp(true);
  };

  return (
    <SectionContainer>
      <Row>
        <SHeading>요청 사이트</SHeading>
        <Btn onClick={handleClick}>+ 요청</Btn>
      </Row>
      <Body>접속이 안되는 사이트를 요청해보세요</Body>
      {exp && <NewRequestForm v={v} setV={setV} />}
      <SitesList v={v} setV={setV} />
    </SectionContainer>
  );
};

export default Sites;
