import React from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { show } from 'store/modules/modal';

export interface ModalInterface {
  showModal: (label: string, component: React.ReactNode) => void;
}

type HOC<PWrapped, PHoc> =
  | React.ComponentClass<PWrapped & PHoc>
  | React.SFC<PWrapped & PHoc>;

const withModal = <P, S>(Component: HOC<P, ModalInterface>): React.SFC<P> => (
  props: P & ModalInterface
) => <Component {...props} />;

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showModal: (label: string, component: React.ReactNode) =>
    show(label, component)(dispatch),
});

const composedHoc = compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withModal
);
export default composedHoc;
