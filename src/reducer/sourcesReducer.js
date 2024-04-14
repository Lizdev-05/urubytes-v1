// const sourcesReducer = (state = [], action) => {
//   switch (action.type) {
//     case "UPDATE_SOURCES":
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export default sourcesReducer;

const tableDataReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_TABLE_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default tableDataReducer;
