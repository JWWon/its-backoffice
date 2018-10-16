import { convertToRaw, EditorState } from 'draft-js';
import React, { Component } from 'react';

import Template from 'components/dashboard/Template';
import TextEditor from 'components/dashboard/TextEditor';
import { deleteState, loadState, saveState } from 'lib/storage/editor';
import { IParams } from 'pages/DashboardPage';

const MAIN_ABOUT = 'MAIN_ABOUT';

interface State {
  editorState: EditorState;
}

class AboutContainer extends Component<IParams, State> {
  public state: State = {
    editorState: EditorState.createEmpty(),
  };

  public componentDidMount() {
    const editor = loadState(MAIN_ABOUT);
    if (editor) {
      this.setState({ editorState: EditorState.createWithContent(editor) });
    }
  }

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
    saveState(MAIN_ABOUT, editorState);
  };

  private handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contentHTML = convertToRaw(
      this.state.editorState.getCurrentContent()
    );
    console.log(contentHTML);
    if (false) {
      deleteState(MAIN_ABOUT);
    }
  };
}

export default AboutContainer;
