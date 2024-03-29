import { AuthState as IAuth } from 'store/modules/auth';

const AUTH = 'auth/AUTH';

export const saveAuth = (auth: IAuth) => {
  // check localStorage is available
  if (typeof localStorage === 'undefined') return null;

  localStorage.setItem(AUTH, JSON.stringify(auth));
  return true;
};

export const loadAuth = () => {
  // check localStorage is available
  if (typeof localStorage === 'undefined') return null;

  const auth = localStorage.getItem(AUTH);
  if (!auth) return null;

  try {
    const parsed = JSON.parse(auth);
    return parsed;
  } catch (e) {
    return null;
  }
};

export const clearAuth = () => {
  // check localStorage is available
  if (typeof localStorage === 'undefined') return null;

  localStorage.removeItem(AUTH);
  return true;
};
