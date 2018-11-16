import axios from 'axios';

export interface InputInterface {
  province: string;
  city: string;
  name: string;
  phone: string;
  address: string;
  landmark: string;
  webpage: string;
  timetable: { [x: string]: string };
  directions: { [x: string]: string };
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
  grade: number; // 2: A, 1: B, 0: C, -1: D
  hidden: boolean;
  tags: string[];
}

export interface SubmitInterface extends InputInterface {
  id?: string;
}

export interface ClinicInterface extends InputInterface {
  id: string;
  createdAt: string;
  hits: number;
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
    const data: ClinicInterface[] = response.data;
    // 오름차순 정렬
    data.sort((x, y) => (x.name < y.name ? -1 : x.name > y.name ? 1 : 0));
    return data;
  } catch (e) {
    throw e;
  }
};

export const searchList = async (keyword: string) => {
  try {
    const response = await axios.get('/clinics', { params: { keyword } });
    const data: ClinicInterface[] = response.data;
    // 오름차순 정렬
    data.sort((x, y) => (x.name < y.name ? -1 : x.name > y.name ? 1 : 0));
    return data;
  } catch (e) {
    throw e;
  }
};

export const updateClinic = async (clinicData: SubmitInterface) => {
  try {
    let response;
    const { id, ...data } = clinicData;
    if (id) response = await axios.patch(`/clinics/${id}`, data);
    else response = await axios.post('/clinics', data);

    return response.data;
  } catch (e) {
    throw e;
  }
};

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
