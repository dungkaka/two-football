import { BET_STATUS } from '../constant/constant';

export default (
  state = {
    loading: false,
    error: null,
    ids: [],
    byId: {},
  },
  { type, payload }
) => {
  switch (type) {
    case BET_STATUS.REQUEST_BET_STATUS:
      return { ...state, loading: true };

    case BET_STATUS.RECEIVE_BET_STATUS:
      const bet_status = payload.bet_status;
      const ids = [];
      const byId = {};

      bet_status.forEach((bet) => {
        ids.push(bet.bet_type);
        byId[bet.bet_type] = bet;
      });

      return {
        ...state,
        ids,
        byId,
        loading: false,
        error: null,
      };

    case BET_STATUS.INVALIDATE_BET_TYPE:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };

    case BET_STATUS.REQUEST_UPDATE_BET_CONTENT:
      return { ...state, loading: true };

    case BET_STATUS.COMPLETE_UPDATE_BET_CONTENT:
      const new_state = { ...state, loading: false };
      new_state.ids.push(payload.bet.bet_type);
      new_state.byId[payload.bet.bet_type] = payload.bet;

      return new_state;

    // case BET_STATUS.UPDATE_BET_CONTENT:
    //   return {
    //     ...state,
    //     byId: {
    //       ...state.byId,
    //       [payload.id]: {
    //         id: payload.id,
    //         name: payload.name,
    //       },
    //     },
    //   };

    default:
      return state;
  }
};

export const getBetStatusList = (state) => {
  return state.ids.map((id) => state.byId[id]);
};
