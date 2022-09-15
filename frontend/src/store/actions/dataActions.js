import { SET_ID_CARD } from "../types";

export const setIdCard = (payload) => {
  return {
    type: SET_ID_CARD,
    payload,
  };
};
