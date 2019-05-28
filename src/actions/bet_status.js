import { BET_STATUS } from './../constant/constant';
import request from './../utils/axios';
import { URL } from './../config/end-points-url';
import { receiveNotification } from './notification';
import { betNotificationChannel as channel } from '../utils/pusher';
export const updateBetStatus = (bet, match_id, user_id) => {
  return async (dispatch) => {
    dispatch(requestUpdateBetContent());

    try {
      const response = await request.server.post(
        URL.UPDATE_BET_STATUS_USER_ON_MATCH(match_id),
        { ...bet }
      );

      dispatch(completeUpdateBetContent({ bet: response.data.bet }));
      channel.bind(`bet_${match_id}_${bet.bet_type}_${user_id}`, function(data) {
        dispatch(receiveNotification(data));
      });
    } catch (error) {
      dispatch(invalidateBetType(error.response.data));
    }
  };
};

export const getBetStatus = (match_id) => {
  return async (dispatch) => {
    dispatch(requestBetStatus());

    try {
      console.log('URL', URL.GET_BET_STATUS_USER_ON_MATCH(match_id));
      const response = await request.server.get(
        URL.GET_BET_STATUS_USER_ON_MATCH(match_id)
      );

      dispatch(receiveBetStatus({ bet_status: response.data.bets }));
    } catch (error) {
      dispatch(invalidateBetType(error));
    }
  };
};

export const requestBetStatus = () => ({
  type: BET_STATUS.REQUEST_BET_STATUS,
});

export const receiveBetStatus = ({ bet_status }) => ({
  type: BET_STATUS.RECEIVE_BET_STATUS,
  payload: {
    bet_status,
  },
});

export const invalidateBetType = (error) => ({
  type: BET_STATUS.INVALIDATE_BET_TYPE,
  payload: {
    error,
  },
});

export const requestUpdateBetContent = () => ({
  type: BET_STATUS.REQUEST_UPDATE_BET_CONTENT,
});

export const completeUpdateBetContent = ({ bet }) => ({
  type: BET_STATUS.COMPLETE_UPDATE_BET_CONTENT,
  payload: {
    bet,
  },
});
