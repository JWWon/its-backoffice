import { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';

import * as storage from 'lib/storage/auth';
import { IStoreState } from 'store/modules';
import { IAuthState as IAuth, setAuth } from 'store/modules/auth';

interface IProps extends RouteComponentProps<any> {
  auth: IAuth;
  setAuth: (i: IAuth) => void;
}

class Core extends Component<IProps> {
  public componentDidMount() {
    console.log('INIT CALLED');
    this.initialize();
  }

  public componentDidUpdate() {
    this.checkAuth(this.props.auth);
  }

  public render() {
    return null;
  }

  private checkAuth = (auth: IAuth) => {
    const { history } = this.props;
    if (auth && auth.info) {
      this.props.setAuth(auth);
      history.push('/main/slides');
    } else {
      history.push('/login');
    }
  };

  private initialize = async () => {
    const auth = await storage.loadAuth();
    this.checkAuth(auth);
  };
}

export default compose(
  connect(
    ({ auth }: IStoreState) => ({ auth }),
    dispatch => ({
      setAuth: (info: IAuth) => setAuth(info)(dispatch),
    })
  ),
  withRouter
)(Core);
