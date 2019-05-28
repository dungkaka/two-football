import { BET_NOTIFICATION } from './../constant/constant';

export const receiveNotification = (result) => ({
  type: BET_NOTIFICATION.RECEIVE_RESULT,
  payload: {
    result,
  },
});
