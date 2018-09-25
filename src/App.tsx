import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import Template from 'components/base/Template';
import NavbarContainer from 'containers/base/NavbarContainer';
import SidebarContainer from 'containers/base/SidebarContainer';

const App = () => (
  <ThemeProvider theme={theme}>
    <Template navbar={<NavbarContainer />} sidebar={<SidebarContainer />}>
      <div>hello</div>
    </Template>
  </ThemeProvider>
);

export default App;
