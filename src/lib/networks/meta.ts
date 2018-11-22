import axios from 'axios';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';

export interface Base {
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

export interface RawMeta extends Base {
  content: string;
}

export interface ParsedMeta extends Base {
  content: EditorState;
}

export const getRawMeta = async () => {
  try {
    const response = await axios.get('/meta');
    const data: RawMeta = response.data;
    return data;
  } catch (e) {
    throw e;
  }
};

export const updateFooter = async (meta: RawMeta) => {
  try {
    const response = await axios.patch('/meta', meta);
    alert('저장되었습니다');
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const getParsedMeta = async () => {
  try {
    const data = await getRawMeta();

    let content: EditorState;
    if (data.content) {
      const rawContent = JSON.parse(data.content);
      const contentState = convertFromRaw(rawContent);
      content = EditorState.createWithContent(contentState);
    } else {
      content = EditorState.createEmpty();
    }
    const parsedData: ParsedMeta = { ...data, content };
    return parsedData;
  } catch (e) {
    throw e;
  }
};

export const updateContent = async (meta: ParsedMeta) => {
  try {
    const contentState = meta.content.getCurrentContent();
    const content: string = JSON.stringify(convertToRaw(contentState));

    const response = await axios.patch('/meta', { ...meta, content });
    alert('저장되었습니다');
    return response.data;
  } catch (e) {
    throw e;
  }
};
