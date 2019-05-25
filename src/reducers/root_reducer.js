import { combineReducers } from 'redux';
import bet_status from './bet_status';
import user from './login';

export const rootReducer = combineReducers({
  bet_status,
  user,
});

// export default store;
// export const appReducer = (state, action) =>
//   action.type === 'USER_LOGOUT'
//     ? rootReducer(undefined, action)
//     : rootReducer(state, action);
