import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Template from 'components/base/Template';
import Core from 'containers/base/Core';
import NavbarContainer from 'containers/base/NavbarContainer';
import SidebarContainer from 'containers/base/SidebarContainer';
import { AuthPage, DashboardPage } from 'pages';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Template navbar={<NavbarContainer />} sidebar={<SidebarContainer />}>
      <Route exact path="/" component={DashboardPage} />
      <Route
        path="/:type(main|client|notice|other)/:detail"
        component={DashboardPage}
      />
      <Route path="/:type(login|register)" component={AuthPage} />
      <Core />
    </Template>
  </ThemeProvider>
);

export default App;
