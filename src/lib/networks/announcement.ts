import axios from 'axios';

export interface AnnouncementInterface {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export const getAnnouncement = async () => {
  try {
    const response = await axios.get('/announcements');
    const data: AnnouncementInterface[] = response.data;
    return data;
  } catch (e) {
    throw e;
  }
};

export const updateAnnouncement = async (
  announcementData: AnnouncementInterface
) => {
  try {
    const { id, ...data } = announcementData;
    let response;
    if (id) {
      response = await axios.patch(`/announcement/${id}`, data);
    } else {
      response = await axios.post('/announcement', data);
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
