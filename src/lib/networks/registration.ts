import axios from 'axios';

export interface RegisterInterface {
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
