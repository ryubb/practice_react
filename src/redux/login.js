import client from "../config/apiClient";

const initState = {};

const loginReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "LOGIN":
      console.log("redux login");
      return {
        ...state,
        data: action.payload
      };
    case "SUCCESS":
      console.log("redux success");
      return {
        ...state,
        data: action,
        status: "success"
      };
    case "FAIL":
      console.log("redux fail");
      return {
        ...state,
        data: action,
        status: "fail"
      };
    default:
      console.log("redux default");
      return state;
  }
};

export function studentLoginSuccess(result) {
  return {
    type: "SUCCESS",
    payload: result
  };
}

export function studentLoginFail(err) {
  return {
    type: "FAIL",
    payload: err
  };
}

export function doLogin(email, password) {
  return () => dispatch => {
    console.log("Login success");
    const data = {
      email: email,
      password: password
    };
    return client.post("/v1/students/login", data).then(
      res => {
        const payload = res.data;
        if (payload.accesToken && payload.localKey) {
          dispatch(studentLoginSuccess(payload));
        } else {
          const err = new Error("Cannot get authToken.");
          dispatch(studentLoginFail(res));
          throw err;
        }
      },
      err => {
        dispatch(studentLoginFail(err));
        throw err;
      }
    );
  };
}

export default loginReducer;
