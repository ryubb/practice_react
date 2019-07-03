const initState = {
  name: "",
  age: ""
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.name
      };
    case "SET_AGE":
      return {
        ...state,
        age: action.age
      };
    default:
      return state;
  }
};

export default userReducer;
