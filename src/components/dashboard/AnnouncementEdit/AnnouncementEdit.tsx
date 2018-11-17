import { EditorState } from 'draft-js';
import {
  AnnouncementInterface,
  InputInterface,
  SubmitInterface,
  updateAnnouncement,
} from 'lib/networks/announcement';

import InputText from 'components/common/InputText';
import TextEditor from 'components/dashboard/TextEditor';
import React, { Component } from 'react';
import * as s from './AnnouncementEdit.styled';

type State = InputInterface;

class AnnouncementEdit extends Component<AnnouncementInterface & any, State> {
  public constructor(props: AnnouncementInterface) {
    super(props);
    this.state = {
      title: props.title || '',
      content: props.content || EditorState.createEmpty(),
    };
  }

  public render() {
    const { title, content } = this.state;
    return (
      <s.Form onSubmit={this.handleSubmit}>
        <s.RowWrapper>
          <InputText
            label="제목"
            name="title"
            value={title}
            handleChange={this.handleChange}
          />
        </s.RowWrapper>
        <s.Label>내용</s.Label>
        <TextEditor
          editorState={content}
          handleChange={this.handleEditorChange}
        />
        <s.ButtonWrapper>
          <s.SubmitButton>등록</s.SubmitButton>
        </s.ButtonWrapper>
      </s.Form>
    );
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  private handleEditorChange = (content: EditorState) => {
    this.setState({ content });
  };

  private handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { id } = this.props;
      const data: SubmitInterface = { ...this.state };
      if (id) data.id = id;

      await updateAnnouncement(data);
    } catch (e) {
      throw e;
    }
  };
}

export default AnnouncementEdit;
