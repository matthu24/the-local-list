import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root';
import thunk from '../thunk/thunk';
// import logger from 'redux-logger';


//define configureStore, which creates store and passes in root reducer and apply middleware


//need preloadedState for keeping a user logged in if the browser is refreshed

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))
);


export default configureStore;
