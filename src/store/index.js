import { createStore, applyMiddleware } from "redux";
import RootReducer from "./Reducers";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { Saga } from "./Saga";

const sagaMiddleware = createSagaMiddleware();
const Store = createStore(
    RootReducer,
     {},
     applyMiddleware(
    createLogger(),
    sagaMiddleware
     )
);
sagaMiddleware.run(Saga)
console.log("mainStore------>", Store);
export default Store;
