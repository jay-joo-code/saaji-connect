import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from 'src/util/api';
import SiteCard from 'src/components/cards/SiteCard';

const Container = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: flex-start;
`;

const Content = styled.div`
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  padding: 2rem;
  background: white;
`;

const SitesList = ({ v, setV }) => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    api.get('/site')
      .then((res) => setSites(res.data))
      .catch(() => {});
  }, [v]);

  return (
    <Container>
      <Content>
        {sites && sites.map((site) => (
          <SiteCard key={site._id} site={site} v={v} setV={setV} />
        ))}
      </Content>
    </Container>
  );
};

export default SitesList;
