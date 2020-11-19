import { USER_LOGGED_IN } from "../action/types";
import { combineReducers } from "redux";

const currentUserDataReducer = (state = null, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.payload;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  currentUserDataReducer,
});

export default allReducers;
