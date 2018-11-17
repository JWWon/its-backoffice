import axios from 'axios';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';

export interface InputInterface {
  title: string;
  content: EditorState;
}

export interface SubmitInterface extends InputInterface {
  id?: string;
}

export interface AnnouncementInterface extends InputInterface {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export const getAnnouncement = async () => {
  try {
    const response = await axios.get('/announcements');
    const data: any[] = response.data;
    const nextData: AnnouncementInterface[] = data.map(item => {
      if (item.content) {
        const contentState = JSON.parse(item.content);
        const editorState = convertFromRaw(contentState);
        item.content = EditorState.createWithContent(editorState);
      }
      return item;
    });
    return nextData;
  } catch (e) {
    throw e;
  }
};

export const updateAnnouncement = async (announcementData: SubmitInterface) => {
  try {
    const { id, ...data } = announcementData;
    const contentState = data.content.getCurrentContent();
    const nextData: any = {
      title: data.title,
      content: JSON.stringify(convertToRaw(contentState)),
    };
    let response;
    if (id) {
      response = await axios.patch(`/announcements/${id}`, nextData);
    } else {
      response = await axios.post('/announcements', nextData);
    }
    alert('저장되었습니다');
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const deleteAnnouncement = async (id: string) => {
  try {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      await axios.delete(`/announcements/${id}`);
      alert('삭제되었습니다');
    }
  } catch (e) {
    throw e;
  }
};
