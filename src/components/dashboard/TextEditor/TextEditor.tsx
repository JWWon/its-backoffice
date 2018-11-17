/* tslint:disable:variable-name */
import AWS from 'aws-sdk';
import { EditorState } from 'draft-js';
import moment from 'moment';
import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './editor-style.css';

interface Props {
  label: string;
  id: string;
  editorState: EditorState;
  handleChange: (e: EditorState) => void;
}

class TextEditor extends Component<Props> {
  public render() {
    const { editorState, handleChange } = this.props;
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
        editorState={editorState}
        wrapperClassName="wrapperClass"
        editorClassName="editorClass"
        onEditorStateChange={handleChange}
        localization={{ locale: 'ko' }}
        toolbar={toolbar}
      />
    );
  }

  private handleUploadImage = (file: File) =>
    new Promise((resolve, reject) => {
      const { label, id } = this.props;
      const bucket = new AWS.S3();
      const params = {
        Bucket: process.env.REACT_APP_AWS_S3_BUCKET_NAME || '',
        Key: `${label}/${id || moment().format('YYYY.MM.DD')}/${file.name}`,
        ContentType: file.type,
        Body: file,
        ACL: 'public-read',
      };

      bucket
        .upload(params)
        .on('httpUploadProgress', evt => {
          console.log((evt.loaded * 100) / evt.total);
        })
        .send((e: any, data: { Location: string }) => {
          if (e) throw e;
          resolve({ data: { link: data.Location } });
        });
    });
}

export default TextEditor;
