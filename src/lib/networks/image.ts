import axios from 'axios';

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
