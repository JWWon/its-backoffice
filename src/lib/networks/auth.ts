import axios from 'axios';

interface LoginInterface {
  email: string;
  password: string;
}

export const login = async (data: LoginInterface) => {
  try {
    const response = await axios.post('/signin', data);
    return response.data;
  } catch (e) {
    throw e;
  }
};
