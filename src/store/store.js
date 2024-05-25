import { configureStore } from "@reduxjs/toolkit";

import countReducer from "./reducers/countReducer";
import movementReducer from "./reducers/movementReducer";
import listingReducer from "./reducers/listing";

// store to Local Storage
// Redux Middleware Fucntion
const storeToLocalStorage = (props) => {
  return (exe) => {
    return (action) => {
      const result = exe(action); // execute the action and return the result
      // statements here will be executed immediately after action completeion in redux

      console.log(props.getState());

      // result will have the next step
      localStorage.setItem("redux_store", JSON.stringify(props.getState()));

      return result;
    };
  };
};

const loadFromStorage = () => {
  if (localStorage.getItem("redux_store") !== null) {
    return JSON.parse(localStorage.getItem("redux_store"));
  }
};

const store = configureStore({
  reducer: {
    countReducer,
    movementReducer,
    listingReducer,
  }, // need reducers to create the initial state for the store
  devTools: true, // Should be false when the codes are deployed to production
  middleware: (defaultMiddlewareFn) => {
    return [
      ...defaultMiddlewareFn(), // spread default middlewares from the fn
      storeToLocalStorage,
    ];
  },
  preloadedState: loadFromStorage(),
});

export default store;
