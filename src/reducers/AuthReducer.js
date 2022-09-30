
export const RESTORE = 'RESTORE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const authReducer = (prevstate, { type, payload = {} }) => {
  // il va gerer le state selon type passé dans action

  switch (type) {
    case RESTORE: return {
      ...prevstate,
      isLoading: false,
      isLogued: true,
      ...payload,
    };

    case LOGIN: return {
      isLoading: false,
      isLogued: true,
      token: payload.token,
    };

    case LOGOUT: return {
      isLoading: false,
      isLogued: false,
      token: null,
    };

    default: {
      return prevstate;
    }
  }
}