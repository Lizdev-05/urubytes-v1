const tableDataReducer = (state = { data: [], isLoading: true }, action) => {
  switch (action.type) {
    case "UPDATE_TABLE_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default tableDataReducer;
