import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducer";
import { signalRMiddleware } from './middleware/signalR';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(thunk, signalRMiddleware());

const store = createStore(
    reducers,
    composeEnhancers(middleware)
);

export default store;