import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Template from 'components/base/Template';
import Modal from 'components/common/Modal';
import Core from 'containers/base/Core';
import NavbarContainer from 'containers/base/NavbarContainer';
import SidebarContainer from 'containers/base/SidebarContainer';
import { AuthPage, DashboardPage } from 'pages';
import { StoreState } from 'store/modules';
import { ModalState } from 'store/modules/modal';
import theme from './theme';

interface Props {
  modal: ModalState;
}

const App: React.SFC<Props> = ({ modal }) => (
  <ThemeProvider theme={theme}>
    <Template navbar={<NavbarContainer />} sidebar={<SidebarContainer />}>
      <Route exact path="/" component={DashboardPage} />
      <Route
        path="/:type(main|client|notice|other)/:detail"
        component={DashboardPage}
      />
      <Route path="/:type(login|register)" component={AuthPage} />
      <Core />
      <Modal modal={modal} />
    </Template>
  </ThemeProvider>
);

export default connect(
  ({ modal }: StoreState) => ({ modal }),
  null,
  null,
  {
    pure: false,
  }
)(App);
