// file used to handle the reducer fn for counter UI

const initialState = {
  count: 999,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "count_inc":
      return {
        ...state,
        count: state.count + 1,
      };
    case "count_dec":
      return {
        ...state,
        count: state.count - 1,
      };
    case "count_reset":
      return initialState;
    default:
      return state;
  }
};

export default countReducer;
