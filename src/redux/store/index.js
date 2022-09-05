import {
    configureStore,
    getDefaultMiddleware
} from "@reduxjs/toolkit";
import reducers from "../reducers";

import createSagaMiddleware from "redux-saga";
import saga from '../middleware'

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
    reducer: reducers,
    middleware
});

sagaMiddleware.run(saga);

export default store;