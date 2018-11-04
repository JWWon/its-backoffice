import axios from 'axios';

export interface InputInterface {
  type: 'slide' | 'news';
  alt: string;
  href: string;
  id?: string;
  desktopSrc?: string;
  mobileSrc?: string;
}

export interface ImageInterface {
  id: string; // Primary key
  type: 'slide' | 'news';
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
  href: string;
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

    const data = JSON.stringify(imgData);
    if (imgData.id) response = await axios.patch(`/images/${imgData.id}`, data);
    else response = await axios.post('/images', data);

    return response.data;
  } catch (e) {
    throw e;
  }
};
