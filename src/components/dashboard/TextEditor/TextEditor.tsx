/* tslint:disable:variable-name */
import { EditorState } from 'draft-js';
import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './editor-style.css';

interface State {
  editorState: EditorState;
}

class TextEditor extends Component<{}, State> {
  public state: State = {
    editorState: EditorState.createEmpty(),
  };

  public render() {
    const { editorState } = this.state;
    const toolbar = {
      options: [
        'inline',
        'blockType',
        'fontSize',
        'list',
        'textAlign',
        'colorPicker',
        'link',
        'emoji',
        'image',
        'history',
      ],
      inline: {
        options: ['bold', 'italic', 'underline', 'strikethrough'],
      },
      fontSize: {
        options: [10, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
      },
      image: {
        urlEnabled: false,
        uploadCallback: this.handleUploadImage,
      },
    };

    return (
      <Editor
        wrapperClassName="wrapperClass"
        editorClassName="editorClass"
        editorState={editorState}
        onEditorStateChange={this.handleChange}
        localization={{ locale: 'ko' }}
        toolbar={toolbar}
      />
    );
  }

  private handleUploadImage = (file: any) =>
    new Promise<any>((resolve, reject) => {
      console.log(file);
      const response = {
        data: {
          link:
            'http://kstatic.inven.co.kr/upload/2016/12/08/bbs/i15748881270.jpg',
        },
      };

      resolve(response);
    });

  private handleChange = (editorState: EditorState) => {
    this.setState({ editorState });
  };
}

export default TextEditor;
