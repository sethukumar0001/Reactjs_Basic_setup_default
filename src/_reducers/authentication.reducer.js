import { userConstants } from "../_constants";

let token = localStorage.getItem("access_token");

const initialState = token ? { loggedIn: true } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      localStorage.clear();
      return {};
    default:
      return state;
  }
}
