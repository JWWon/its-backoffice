import { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';

import * as storage from 'lib/storage/auth';
import { StoreState } from 'store/modules';
import { AuthState as IAuth, setAuth } from 'store/modules/auth';

interface Props extends RouteComponentProps<any> {
  auth: IAuth;
  setAuth: (a: IAuth) => void;
}

class Core extends Component<Props> {
  public componentDidMount() {
    this.initialize();
  }

  public componentDidUpdate() {
    this.checkAuth();
  }

  public render() {
    return null;
  }

  private initialize = async () => {
    this.syncStoreAuth();
    this.checkAuth();
  };

  private checkAuth = () => {
    const { history, location, auth } = this.props;
    if (auth.info && auth.tokenExp && location.pathname === '/login') {
      history.push('/main/slides');
    } else {
      history.push('/login');
    }
  };

  private syncStoreAuth = async () => {
    const { auth } = this.props;
    const storageAuth = await storage.loadAuth();

    if (storageAuth && (!auth.info || !auth.tokenExp)) {
      this.props.setAuth(storageAuth);
    }
  };
}

export default compose(
  connect(
    ({ auth }: StoreState) => ({ auth }),
    dispatch => ({
      setAuth: (auth: IAuth) => setAuth(auth)(dispatch),
    })
  ),
  withRouter
)(Core);
