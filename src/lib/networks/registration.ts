import axios from 'axios';

export interface RegisterInterface {
  id: string;
  name: string;
  phone: string;
  address: string;
  manager: {
    name: string;
    phone: string;
    email: string;
  };
  certificates: {
    association: string; // image url
    specialist: string;
    invisalign: string;
  };
}

export const getRegistrations = async () => {
  try {
    const response = await axios.get('/registrations');
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const deleteRegistration = async (
  id: string,
  skipPermission?: boolean
) => {
  try {
    if (skipPermission || window.confirm('정말 삭제하시겠습니까?')) {
      axios.delete(`/registrations/${id}`);
      alert('삭제되었습니다');
    }
  } catch (e) {
    throw e;
  }
};
