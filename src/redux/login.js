import client from "../config/apiClient";

const initState = {};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        data: action.payload
      };
    case "FAIL":
      return {
        ...state,
        data: action.payload
      };
    case "STUDENTSUCCESS":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default loginReducer;

export const doLogin = () => {
  return dispatch => {
    const data = {
      email: "ryubb1108@gmail.com",
      password: "Ryubb15312"
    };
    return client.post("/v1/students/login", data).then(
      res => {
        const payload = res.data;
        if (payload.accessToken && payload.localKey) {
          dispatch({ type: "SUCCESS", payload: payload });
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
          payload: err
        });
        throw err;
      }
    );
  };
};

export const fetchStudentMe = accessToken => {
  return dispatch =>
    client
      .get("/v1/students/me", {
        headers: {
          "Content-Type": "application/json",
          "Application-Authorization": `Bearer ${accessToken}`
        }
      })
      .then(
        res => {
          const payload = res.data;
          if (payload.email_hash) {
            dispatch({ type: "STUDENTSUCCESS", payload: payload });
          } else {
            dispatch({ type: "STUDENTFAIL", payload: payload });
          }
        },
        err => {
          dispatch({ type: "STUDENTSUCCESS", payload: err });
        }
      );
};
