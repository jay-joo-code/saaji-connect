import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from 'src/util/api';
import SiteCard from 'src/components/cards/SiteCard';

const Container = styled.div`

`;

const ToggleSites = () => {
  const [sites, setSites] = useState([]);
  const [v, setV] = useState(0);

  useEffect(() => {
    api.get('/site')
      .then((res) => setSites(res.data));
  }, [v]);

  return (
    <Container>
      {sites && sites.map((site) => (
        <SiteCard
          key={site._id}
          site={site}
          v={v}
          setV={setV}
          isAdmin
        />
      ))}
    </Container>
  );
};

export default ToggleSites;
