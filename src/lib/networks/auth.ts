import moment from 'moment';

interface ILogin {
  email: string;
  password: string;
}

export const login = async ({ email, password }: ILogin) => {
  let response = null;
  if (email && password) {
    response = {
      info: {
        name: '박찬혁',
        thumbnail: null,
      },
      tokenExp: moment().add(14, 'days'),
    };
  }

  return response;
};
