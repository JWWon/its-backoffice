import axios from 'axios';

interface LoginInterface {
  email: string;
  password: string;
}

export const login = async (loginData: LoginInterface) => {
  try {
    const data = JSON.stringify(loginData);
    const response = await axios.post('/signin', data);
    return response.data;
  } catch (e) {
    throw 500;
  }
};
