import { userConstants } from "../_constants";
import { login } from "../_services/example.service";
import { alertActions } from "./";
// import { createBrowserHistory } from "history";

// const history = createBrowserHistory();

export const loginCall = (payload) => {
  return (dispatch) => {
    dispatch(request({ payload }));

    login(payload).then(
      (user) => {
        localStorage.setItem("access_token", user.data.access_token);
        dispatch(success(user));
        console.log(user)
        // profile().then((data) => {
        //   console.log(data)
        //   localStorage.setItem("user", JSON.stringify(data));
        //   window.location.href = "/airline-config";
        //   // history.push("/site-creation/list");
        // });
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
};

export const logout = () => {
  localStorage.removeItem("user");
  return { type: userConstants.LOGOUT };
};
