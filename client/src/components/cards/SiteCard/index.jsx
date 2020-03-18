import React, { useState } from 'react';
import styled from 'styled-components';
import Body from 'src/components/fonts/Body';
import Btn from 'src/components/buttons/Btn';
import api from 'src/util/api';
import { ReactComponent as CmtIconRaw } from 'src/assets/ui/comment.svg';
import formatDate from 'src/util/helpers/formatDate';
import CmtSection from './CmtSection';

const Container = styled.div`
  opactiy: .9;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Col = styled.div`

`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  margin-top: .1rem;
  cursor: pointer;
  
  & > p {
    margin-right: .5rem;
  }
  
  & > svg {
    margin-right: .2rem;
  }
`;

const CmtIcon = styled(CmtIconRaw)`
  height: .8rem;
  width: .9rem;
`;

const Url = styled(Body)`
  font-weight: bold;
`;

const Muted = styled(Body)`
  opacity: .7;
`;

const Site = ({
  site, v, setV, isAdmin,
}) => {
  const date = formatDate(site.createdAt);
  
  const states = ['대기', '해결', '불가'];
  const colors = ['warning', 'success', 'danger'];
  const btnText = states[site.state];
  const color = colors[site.state];

  const handleClick = () => {
    if (isAdmin) {
      api.post(`/site/${site._id}/toggle-state`)
        .then(() => setV(v + 1))
        .catch(() => {});
    }
  };

  const [expand, setExpand] = useState(false);

  return (
    <Container>
      <Row>
        <Col>
          <Url>{site.url}</Url>
          <Meta onClick={() => setExpand(!expand)}>
            <Muted>{date}</Muted>
            <CmtIcon />
            <Muted>{(site.cmts && site.cmts.length) || 0}</Muted>
          </Meta>
        </Col>
        <Btn
          color={color}
          onClick={handleClick}
        >
          {btnText}
        </Btn>
      </Row>
      {expand && site && (
        <CmtSection
          site={site}
          v={v}
          setV={setV}
          isAdmin={isAdmin}
        />
      )}
    </Container>
  );
};

export default Site;
