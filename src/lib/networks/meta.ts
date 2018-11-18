import axios from 'axios';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';

export interface Footer {
  president: string;
  manager: string;
  registration: string;
  email: string;
  phone: string;
  address: string;
  social: {
    facebook: string;
    instagram: string;
    blog: string;
  };
}

export interface Content {
  content: EditorState;
}

export const getFooter = async () => {
  const response = await axios.get('/meta');
  const { content, ...other } = response.data;
  return other;
};

export const updateFooter = async (footer: Footer) => {
  try {
    const response = await axios.patch('/meta', footer);
    alert('저장되었습니다');
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const getContent = async () => {
  const response = await axios.get('/meta');
  const { content } = response.data;
  if (content) {
    const rawContent = JSON.parse(content);
    const contentState = convertFromRaw(rawContent);
    return EditorState.createWithContent(contentState);
  } else {
    return EditorState.createEmpty();
  }
};

export const updateContent = async (content: EditorState) => {
  const contentState = content.getCurrentContent();
  const nextData = { content: JSON.stringify(convertToRaw(contentState)) };
  const response = await axios.patch('/meta', nextData);
  alert('저장되었습니다');
  return response.data;
};
