import { dataInitState } from "../state/data";
import { SET_ID_CARD, TEST } from "../types";
import produce from "immer";

const dataReducer = produce((state = dataInitState, action) => {
  switch (action.type) {
    case TEST:
      state.test = action.payload;
    case SET_ID_CARD: {
      state.idCard = action.payload;
    }
    default:
      return state;
  }
}, dataInitState);
export default dataReducer;
