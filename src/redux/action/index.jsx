import { USER_LOGGED_IN } from "./types";

export const userLoggedInAction = (data) => {
  return {
    type: USER_LOGGED_IN,
    payload: data,
  };
};
