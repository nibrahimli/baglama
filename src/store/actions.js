export const SET_NAME = 'SET_NAME';
export const SET_LOCALE = 'SET_LOCALE'; 

export const setName = payload => ({
  type: SET_NAME,
  payload,
});

export const setLocale = payload => ({
  type: SET_LOCALE,
  payload,
});