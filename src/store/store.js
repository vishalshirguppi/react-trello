import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import projectReducer from '../reducers/projects';
import thunkMiddleWare from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        projects: projectReducer
    }),
    composeEnhancers(applyMiddleware(thunkMiddleWare)),
);

const unsubscribe = store.subscribe(() => console.log(store.getState()));
export default store;
