import produce from 'immer';
import React, { Component } from 'react';

import FooterEdit from 'components/dashboard/FooterEdit';
import Template from 'components/dashboard/Template';
import { Footer, getFooter, updateFooter } from 'lib/networks/meta';

class FooterContainer extends Component<{}, Footer> {
  public state: Footer = {
    president: '',
    manager: '',
    registration: '',
    email: '',
    phone: '',
    address: '',
    social: {
      facebook: '',
      instagram: '',
      blog: '',
    },
  };

  public async componentDidMount() {
    const response: Footer = await getFooter();
    this.setState({ ...this.state, ...response });
  }

  public render() {
    return (
      <Template
        label="Footer"
        buttonText="저장하기"
        handleClick={this.handleClick}>
        <FooterEdit
          handleChange={this.handleChange}
          handleObjChange={this.handleObjChange}
          {...this.state}
        />
      </Template>
    );
  }

  private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState(state =>
      produce(state, draft => {
        draft[name] = value;
      })
    );
  };

  private handleObjChange = (
    name: string,
    value: { [key: string]: string }
  ) => {
    this.setState(state =>
      produce(state, draft => {
        draft[name] = value;
      })
    );
  };

  private handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateFooter(this.state);
  };
}

export default FooterContainer;
