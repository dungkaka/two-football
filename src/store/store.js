import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './../reducers/root_reducer';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

// const store = createStore(appReducer, applyMiddleware(thunk));

export default store;
