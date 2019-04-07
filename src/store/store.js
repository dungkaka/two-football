import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({

})

const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;
const appReducer =  (state, action) => (
    action.type === 'USER_LOGOUT'
        ? rootReducer(undefined, action)
        : rootReducer(state, action)
)


// const store = createStore(appReducer, applyMiddleware(thunk));

export default store;