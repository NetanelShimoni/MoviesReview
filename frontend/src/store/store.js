import dataReducer from "./reducers/dataReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";




const rootReducer = combineReducers({
    data: dataReducer,

});

let middleware = [thunk]

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)));

export default  store