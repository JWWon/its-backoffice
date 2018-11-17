import { EditorState } from 'draft-js';
import React, { Component } from 'react';

import Template from 'components/dashboard/Template';
import TextEditor from 'components/dashboard/TextEditor';
import { deleteState, loadState, saveState } from 'lib/storage/editor';

const MAIN_ABOUT = 'MAIN_ABOUT';

interface State {
  editorState: EditorState;
}

class AboutContainer extends Component<{}, State> {
  public constructor(props: {}) {
    super(props);
    const editor = loadState(MAIN_ABOUT);
    if (editor) {
      this.state = { editorState: EditorState.createWithContent(editor) };
    } else {
      this.state = { editorState: EditorState.createEmpty() };
    }
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
    // const contentHTML = convertToRaw(
    //   this.state.editorState.getCurrentContent()
    // );
    if (false) {
      deleteState(MAIN_ABOUT);
    }
  };
}

export default AboutContainer;
