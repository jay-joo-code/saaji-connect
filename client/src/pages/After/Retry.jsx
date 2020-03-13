import React from 'react';
import styled from 'styled-components';
import Body from 'src/components/fonts/Body';
import SectionContainer from 'src/containers/SectionContainer';
import SaajiConnect from 'src/core/dns/SaajiConnect.bat';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Retry = () => (
  <SectionContainer>
    <Container>
      <Body>
        다운로드가 안되셨나요? 다운로드
        <a href={SaajiConnect} download>다시시도</a>
      </Body>
    </Container>
  </SectionContainer>
);

export default Retry;
