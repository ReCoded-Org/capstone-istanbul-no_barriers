import { USER_LOGGED_IN, WORDS_SEARCHED, LANGUAGE } from "./types";

export const userLoggedInAction = (data) => {
  return {
    type: USER_LOGGED_IN,
    payload: data,
  };
};

export const wordsSearchedAction = (data) => {
  return {
    type: WORDS_SEARCHED,
    payload: data,
  };
};

export const languageAction = (data) => {
  return {
    type: LANGUAGE,
    payload: data,
  };
};
