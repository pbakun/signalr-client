import { combineReducers } from "redux";

import hubReducer from "./reducers/hubReducer";
import hubMethodsReducer from "./reducers/hubMethodsReducer";



const combinedReducer = combineReducers({
    hubReducer,
    hubMethodsReducer
});

const reducer = (state, action) => combinedReducer(state, action);

export default reducer;