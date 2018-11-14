import axios from 'axios';

export interface InputInterface {
  id?: string;
  type?: 'slide' | 'news';
  alt?: string;
  href?: string;
  desktopSrc?: string;
  mobileSrc?: string;
  // only on news
  title?: string;
  content?: string;
}

export interface ImageInterface {
  id: string; // Primary key
  type: 'slide' | 'news';
  alt: string;
  href: string;
  desktopSrc: string;
  mobileSrc: string;
  // only on news
  title?: string;
  content?: string;
}

export const getSlides = async () => {
  try {
    const response = await axios.get('/images', { params: { type: 'slide' } });
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const getNews = async () => {
  try {
    const response = await axios.get('/images', { params: { type: 'news' } });
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const updateImage = async (imgData: InputInterface) => {
  try {
    let response;
    const { id, ...data } = imgData;
    if (id) response = await axios.patch(`/images/${id}`, data);
    else response = await axios.post('/images', data);

    return response.data;
  } catch (e) {
    throw e;
  }
};

export const deleteImage = async (id: string) => {
  try {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      await axios.delete(`/images/${id}`);
      alert('삭제되었습니다');
    }
  } catch (e) {
    throw e;
  }
};
