import React from 'react';
import styled from 'styled-components';
import Cmt from './Cmt';
import NewCmtInput from './NewCmtInput';

const Container = styled.div`
  padding-left: .5rem;
  margin-top: 1rem;
`;

const CmtSection = ({
  site, v, setV, isAdmin,
}) => (
  <Container>
    {site && site.cmts && site.cmts.map((cmt) => (
      <Cmt key={cmt.createdAt} cmt={cmt} />
    ))}
    <NewCmtInput
      _id={site._id}
      isAdmin={isAdmin}
      v={v}
      setV={setV}
    />
  </Container>
);

export default CmtSection;
