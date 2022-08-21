import {dataInitState} from "../state/data";
import {TEST} from "../types";
import produce from "immer";

const dataReducer = produce(
    (state = dataInitState, action) => {
        switch (action.type) {
            case TEST:
                state.test= action.payload
            default:
                return state;
        }
    },
    dataInitState
);
export default dataReducer;
