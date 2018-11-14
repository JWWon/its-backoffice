import axios from 'axios';

export interface InputInterface {
  province: string;
  city: string;
  name: string;
  phone: string;
  address: string;
  landmark: string;
  webpage: string;
  timetable: { [x: string]: string }; // ex. { '월, 수, 금': '1시 ~ 7시', '화': '2시 ~ 5시', '기타': '휴무' }
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
  hits: number;
  grade: number; // 2: A, 1: B, 0: C, -1: D
  hidden: boolean;
}

export interface ClinicInterface extends InputInterface {
  id: string;
  createdAt: string;
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

// export const create = async () => {

// }

export const deleteClinic = async (id: string) => {
  try {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      await axios.delete(`/clinics/${id}`);
      alert('삭제되었습니다');
    }
  } catch (e) {
    throw e;
  }
};
