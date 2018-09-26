import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import Template from 'components/base/Template';
import NavbarContainer from 'containers/base/NavbarContainer';
import SidebarContainer from 'containers/base/SidebarContainer';
import { AuthPage, DashboardPage } from 'pages';

const App = () => (
  <ThemeProvider theme={theme}>
    <Template navbar={<NavbarContainer />} sidebar={<SidebarContainer />}>
      <Route exact path="/" component={DashboardPage} />
      <Route path="/:type/:detail" component={DashboardPage} />
      <Route path="/:type(login|register)" component={AuthPage} />
    </Template>
  </ThemeProvider>
);

export default App;
