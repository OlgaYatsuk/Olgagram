import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import {usersReducer} from "../reducers/usersReducer";
import {chatsReducer} from "../reducers/chatsReducer";
import {authenticationReducer} from "../reducers/authenticationReducer";

const rootReducer = combineReducers({
  usersReducer,
  chatsReducer,
  authenticationReducer,
});

const logger = createLogger({
  collapsed: true,
  diff: true
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
