import AWS from 'aws-sdk';
import 'core-js/fn/object/assign';
import 'core-js/fn/promise';
import setAxios from 'lib/networks/axios';
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
    AWS.config.update({
      region: 'ap-northeast-2',
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });
    this.initialize();
  }

  public componentDidUpdate() {
    this.checkAuth();
  }

  public render() {
    return null;
  }

  private initialize = async () => {
    await setAxios();
    await this.syncStoreAuth();
    this.checkAuth();
  };

  private checkAuth = () => {
    const { history, location, auth } = this.props;
    if (auth.token) {
      if (location.pathname === '/login') {
        history.push('/main/slides');
      }
    } else {
      history.push('/login');
    }
  };

  private syncStoreAuth = async () => {
    const { auth } = this.props;
    const storageAuth = await storage.loadAuth();

    if (storageAuth && !auth.token) {
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
