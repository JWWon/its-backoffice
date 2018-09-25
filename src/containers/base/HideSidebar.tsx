import { Component } from 'react';
import { connect } from 'react-redux';
import { hide, show } from 'store/modules/sidebar';

interface IProps {
  show: () => void;
  hide: () => void;
}

class HideSidebar extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    props.hide();
  }

  public componentWillUnmount() {
    this.props.show();
  }

  public render() {
    return null;
  }
}

export default connect(
  () => ({}),
  {
    hide,
    show,
  }
)(HideSidebar);
