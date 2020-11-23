import { combineReducers } from "redux";
import { USER_LOGGED_IN, WORDS_SEARCHED, LANGUAGE } from "../action/types";

const currentUserDataReducer = (state = null, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.payload;
    default:
      return state;
  }
};

const currentSearchWordsReducer = (state = "", action) => {
  switch (action.type) {
    case WORDS_SEARCHED:
      return action.payload;
    default:
      return state;
  }
};

const languageReducer = (state = "en", action) => {
  switch (action.type) {
    case LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  currentUserDataReducer,
  currentSearchWordsReducer,
  languageReducer,
});

export default allReducers;
