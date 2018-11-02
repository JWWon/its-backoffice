import axios from 'axios';

export interface ClinicInterface {
  id: string; // Primary key
  province: string;
  city: string;
  name: string;
  phone: string;
  address: string;
  landmark: string;
  webpage: string;
  timetable: { [x: string]: string }; // ex. { '월, 수, 금': '1시 ~ 7시', '화': '2시 ~ 5시', '기타': '휴무' }
  // director: string;
  directions: { [x: string]: string }; // ex. { '도보': '불가능', '버스': '30분', '비행기': '인천공항에서 택시' }
  certificates: {
    association: {
      image: string;
    };
    invisalign: {
      image: string;
    };
    specialist: {
      chief: string;
      school: string;
      period: {
        startAt: string;
        endAt: string;
      };
      image: string;
    };
  };
  createdAt: string; // Parsable with either Date or moment
  hits: number;
  grade: number; // 2: A, 1: B, 0: C, -1: D
  hidden: boolean;
}

export const getCount = async () => {
  try {
    const response = await axios.get('/clinics', { params: { count: true } });
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const getList = async () => {
  try {
    const response = await axios.get('/clinics');
    return response.data;
  } catch (e) {
    throw e;
  }
};
