import { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import * as storage from 'lib/storage/auth';
// import * as authActions from 'store/modules/auth';

interface IProps extends RouteComponentProps<any> {}

class Core extends Component<IProps> {
  public componentDidMount() {
    this.initialize();
  }

  public render() {
    return null;
  }

  private initialize = async () => {
    const auth = storage.loadAuth();
    if (!auth) {
      this.props.history.push('/login');
    }
  };
}

export default withRouter(Core);
