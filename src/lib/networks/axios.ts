import axios from 'axios';

export default function setAxios() {
  if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'https://api.itso-o.com/';
  } else {
    axios.defaults.baseURL = 'http://localhost:5000/';
  }
  axios.defaults.headers.common['Content-Type'] =
    'application/x-www-form-urlencoded';
}
