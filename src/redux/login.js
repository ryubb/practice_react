import client from "../config/apiClient";

const initState = {};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        data: action
      };
    case "FAIL":
      return {
        ...state,
        age: action.age
      };
    default:
      return state;
  }
};

export default userReducer;

export function doLogin() {
  return dispatch => {
    const data = {
      email: "ryubb1108@gmail.com",
      password: "Ryubb15312"
    };
    return client.post("/v1/students/login", data).then(
      res => {
        const payload = res.data;
        if (payload.accessToken && payload.localKey) {
          dispatch({ type: "SUCCESS", data: payload });
        } else {
          const err = new Error("Cannot get authToken.");
          dispatch({
            type: "FAIL",
            payload: err
          });
        }
      },
      err => {
        dispatch({
          type: "FAIL",
          data: err
        });
        throw err;
      }
    );
  };
}
