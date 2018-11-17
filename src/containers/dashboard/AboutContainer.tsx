import { EditorState } from 'draft-js';
import React, { Component } from 'react';

import Template from 'components/dashboard/Template';
import TextEditor from 'components/dashboard/TextEditor';
import { Content, getContent, updateContent } from 'lib/networks/meta';

class AboutContainer extends Component<{}, Content> {
  public state: Content = {
    content: EditorState.createEmpty(),
  };

  public async componentDidMount() {
    const content = await getContent();
    this.setState({ content });
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

  private handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateContent(this.state.content);
  };
}

export default AboutContainer;
