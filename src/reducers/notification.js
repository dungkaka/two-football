import { BET_NOTIFICATION } from './../constant/constant';

const initialState = {
  showNotification: false,
  data: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case BET_NOTIFICATION.RECEIVE_RESULT:
      return { ...state, showNotification: true, data: payload.result };

    default:
      return state;
  }
};
