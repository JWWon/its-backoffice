import { convertToRaw, EditorState } from 'draft-js';
import React, { Component } from 'react';

import Template from 'components/dashboard/Template';
import TextEditor from 'components/dashboard/TextEditor';
import { IParams } from 'pages/DashboardPage';

interface State {
  editorState: EditorState;
}

class MainNews extends Component<IParams, State> {
  public state: State = {
    editorState: EditorState.createEmpty(),
  };

  public render() {
    return (
      <Template
        label="잇츠교정 뉴스"
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
    const currentContent = this.state.editorState.getCurrentContent();
    console.log(convertToRaw(currentContent));
  };
}

export default MainNews;
