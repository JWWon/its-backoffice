import { EditorState } from 'draft-js';
import React, { Component } from 'react';

import Template from 'components/dashboard/Template';
import TextEditor from 'components/dashboard/TextEditor';
import { getParsedMeta, ParsedMeta, updateContent } from 'lib/networks/meta';

class AboutContainer extends Component<{}, ParsedMeta> {
  public state: ParsedMeta = {
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
    content: EditorState.createEmpty(),
  };

  public async componentDidMount() {
    const data: ParsedMeta = await getParsedMeta();
    this.setState({ ...this.state, ...data });
  }

  public render() {
    return (
      <Template
        label="잇츠교정이란"
        buttonText="저장하기"
        handleClick={this.handleSubmit}>
        <TextEditor
          label="about"
          id="single"
          editorState={this.state.content}
          handleChange={this.handleChange}
        />
      </Template>
    );
  }

  private handleChange = (content: EditorState) => {
    this.setState({ content });
  };

  private handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await updateContent(this.state);
      window.location.reload();
    } catch (e) {
      throw e;
    }
  };
}

export default AboutContainer;
