import React from 'react';
import styled from 'styled-components';
import Heading from 'src/components/fonts/Heading';
import SectionContainer from 'src/containers/SectionContainer';
import BrowserCard from 'src/components/cards/BrowserCard';
import { ReactComponent as Chrome } from 'src/assets/browser-icons/chrome.svg';
import { ReactComponent as Firefox } from 'src/assets/browser-icons/firefox.svg';


const Container = styled.div`

`;

const BrowserContainer = styled.div`
  margin-top: 1rem;
  
  & > a {
    margin-right: 1rem;
  }
`;

const Browsers = () => {
  const ChromeComponent = <Chrome />;
  const FirefoxComponent = <Firefox />;

  return (
    <SectionContainer>
      <Container>
        <Heading>최신 브라우저</Heading>
        <BrowserContainer>
          <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/chrome/">
            <BrowserCard icon={ChromeComponent} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.mozilla.org/ko/firefox/new/">
            <BrowserCard icon={FirefoxComponent} />
          </a>
        </BrowserContainer>
      </Container>
    </SectionContainer>
  );
};

export default Browsers;
