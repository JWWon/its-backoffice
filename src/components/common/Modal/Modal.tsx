import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ModalState } from 'store/modules/modal';
import { dismiss } from 'store/modules/modal';
import * as s from './Modal.styled';

interface Props {
  modal: ModalState;
  dismiss: () => void;
}

class Modal extends Component<Props> {
  public render() {
    const { label, component } = this.props.modal;
    return (
      label && (
        <s.Background>
          <s.Container>
            <s.Header>
              <s.Label>{label}</s.Label>
              <s.DismissButton onClick={this.handleDismiss} />
            </s.Header>
            <s.ComponentWrapper>{component}</s.ComponentWrapper>
          </s.Container>
        </s.Background>
      )
    );
  }

  private handleDismiss = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.dismiss();
  };
}

export default connect(
  () => ({}),
  { dismiss }
)(Modal);
