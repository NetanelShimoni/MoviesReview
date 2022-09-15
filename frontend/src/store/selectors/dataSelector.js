import store from "../store";

export const getCardId = (state = store.getState()) => {
  return state.data.cardId;
};
