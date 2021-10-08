import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import {persistStore} from 'redux-persist';



import rootReducer from "./root.reducer";


const midlewares = [];

if (process.env.NODE_ENV === 'development'){
    midlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...midlewares));

export const persistor =  persistStore(store);

