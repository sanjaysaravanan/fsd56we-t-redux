const initialState = {
  top: 150,
  left: 150,
};

const movementReducer = (state = initialState, action) => {
  switch (action.type) {
    case "move_up":
      if (state.top !== 0) {
        return {
          ...state,
          top: state.top - 150,
        };
      }
      return state;
    case "move_down":
      if (state.top !== 300) {
        return {
          ...state,
          top: state.top + 150,
        };
      }
      return state;
    case "move_left":
      if (state.left !== 0) {
        return {
          ...state,
          left: state.left - 150,
        };
      }
      return state;
    case "move_right":
      if (state.left !== 300) {
        return {
          ...state,
          left: state.left + 150,
        };
      }
      return state;
    case "move_reset":
      return initialState;
    default:
      return state;
  }
};

export default movementReducer;
