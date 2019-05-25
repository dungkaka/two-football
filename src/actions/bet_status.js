import { BET_STATUS } from './../constant/constant';
import request from './../utils/axios';
import { URL } from './../config/end-points-url';
import * as axios from 'axios';

export const updateBetStatus = (bet, match_id) => {
  return async (dispatch) => {
    dispatch(requestUpdateBetContent());

    try {
      const response = await request.server.post(
        URL.UPDATE_BET_STATUS_USER_ON_MATCH(match_id),
        { ...bet }
      );

      dispatch(completeUpdateBetContent({ bet: response.bet }));
    } catch (error) {
      dispatch(invalidateBetType(error.response.data));
    }
  };
};

export const getBetStatus = (match_id) => {
  return async (dispatch) => {
    dispatch(requestBetStatus());

    try {
      //   const response = {
      //     status: 'true',
      //     bets: [
      //       {
      //         bet_type: 1,
      //         bet_content: '1-1',
      //         bet_amount: 400,
      //       },
      //       {
      //         bet_type: 2,
      //         bet_content: '2-1',
      //         bet_amount: 200,
      //       },
      //     ],
      //   };

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
