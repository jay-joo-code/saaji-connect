import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'src/styles/theme';
import Router from './Router';
import Header from 'src/components/layout/Header';
import PageContainer from 'src/containers/PageContainer';

const RouterComponent = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <PageContainer>
      <Router />
    </PageContainer>
  </ThemeProvider>
);

export default RouterComponent;
