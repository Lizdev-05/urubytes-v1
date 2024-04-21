const initialState = {
  userQueries: [],
  data: null,
};

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER_QUERIES":
      return { ...state, userQueries: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export default dashboardReducer;
