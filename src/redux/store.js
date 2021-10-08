import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import {persistStore} from 'redux-persist';



import rootReducer from "./root.reducer";

const midlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...midlewares));

export const persistor =  persistStore(store);

