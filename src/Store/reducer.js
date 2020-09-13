import { combineReducers } from "redux";

import hubReducer from "./reducers/hubReducer";



const combinedReducer = combineReducers({
    hubReducer
});

const reducer = (state, action) => combinedReducer(state, action);

export default reducer;