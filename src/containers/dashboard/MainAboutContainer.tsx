import { convertToRaw, EditorState } from 'draft-js';
import React, { Component } from 'react';

import Template from 'components/dashboard/Template';
import TextEditor from 'components/dashboard/TextEditor';
import { IParams } from 'pages/DashboardPage';

interface State {
  editorState: EditorState;
}

class AboutContainer extends Component<IParams, State> {
  public state: State = {
    editorState: EditorState.createEmpty(),
  };

  public render() {
    return (
      <Template
        label="왜 잇츠 교정인가"
        buttonText="저장하기"
        handleClick={this.handleSubmit}>
        <TextEditor
          editorState={this.state.editorState}
          handleChange={this.handleChange}
        />
      </Template>
    );
  }

  private handleChange = (editorState: EditorState) => {
    this.setState({ editorState });
  };

  private handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contentHTML = convertToRaw(
      this.state.editorState.getCurrentContent()
    );
    console.log(contentHTML);
  };
}

export default AboutContainer;
