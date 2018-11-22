import produce from 'immer';
import React, { Component } from 'react';

import FooterEdit from 'components/dashboard/FooterEdit';
import Template from 'components/dashboard/Template';
import { getRawMeta, RawMeta, updateFooter } from 'lib/networks/meta';

class FooterContainer extends Component<{}, RawMeta> {
  public state: RawMeta = {
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
    content: '',
  };

  public async componentDidMount() {
    const data: RawMeta = await getRawMeta();
    this.setState({ ...this.state, ...data });
  }

  public render() {
    const { content, ...footer } = this.state;
    return (
      <Template
        label="Footer"
        buttonText="저장하기"
        handleClick={this.handleSubmit}>
        <FooterEdit
          handleChange={this.handleChange}
          handleObjChange={this.handleObjChange}
          {...footer}
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

  private handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateFooter(this.state);
  };
}

export default FooterContainer;
