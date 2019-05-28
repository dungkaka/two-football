import { combineReducers } from 'redux';
import bet_status from './bet_status';
import user from './login';
import notification from './notification';

export const rootReducer = combineReducers({
  bet_status,
  user,
  notification,
});

// export default store;
// export const appReducer = (state, action) =>
//   action.type === 'USER_LOGOUT'
//     ? rootReducer(undefined, action)
//     : rootReducer(state, action);
