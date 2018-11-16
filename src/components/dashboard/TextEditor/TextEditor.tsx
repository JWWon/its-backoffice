/* tslint:disable:variable-name */
import { EditorState } from 'draft-js';
import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './editor-style.css';

interface Props {
  editorState: EditorState;
  handleChange: (e: EditorState) => void;
}

class TextEditor extends Component<Props> {
  public render() {
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
        previewImage: true,
        uploadCallback: this.handleUploadImage,
        defaultSize: {
          height: '400px',
          width: 'auto',
        },
      },
    };

    return (
      <Editor
        wrapperClassName="wrapperClass"
        editorClassName="editorClass"
        editorState={this.props.editorState}
        onEditorStateChange={this.props.handleChange}
        localization={{ locale: 'ko' }}
        toolbar={toolbar}
      />
    );
  }

  private handleUploadImage = (file: FileList) =>
    new Promise<any>((resolve, reject) => {
      const previewSrc = URL.createObjectURL(file);
      const response = { data: { link: previewSrc } };
      resolve(response);
    });
}

export default TextEditor;
