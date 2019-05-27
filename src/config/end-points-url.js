import { apifootballKey } from './API-key';

const preUrl = 'http://54.254.228.77/';
// const preUrl = 'http://two-football.herokuapp.com/';
// const preUrl = 'http://two-football-laravel.herokuapp.com/';
const preFootballAPI = `https://apifootball.com/api/?APIkey=${apifootballKey}`;

export const URL = {
  LOGIN: () => {
    return preUrl + 'login';
  },
  TWO_FOOTBALL: () => {
    return preFootballAPI;
  },
  GET_LIST_MATCH: () => {
    return preFootballAPI + `&action=get_events&from=2019-05-10&to=2019-05-17`;
  },
  GET_MATCH: (match_id) => {
    return preFootballAPI + `&action=get_events&match_id=${match_id}`;
  },
  GET_BET_STATUS_USER_ON_MATCH: (match_id) => {
    return preUrl + `api/v1/matches/${match_id}/bets`;
  },

  UPDATE_BET_STATUS_USER_ON_MATCH: (match_id) => {
    return preUrl + `api/v1/matches/${match_id}/bets`;
  },

  GET_USER_BET_HISTORY: (user_id) => {
    return preUrl + `api/v1/users/${user_id}/bets`;
  },

  GET_COMMENT_OF_MATCH: (match_id) => {
    return preUrl + `api/v1/matches/${match_id}/comments`;
  },

  COMMENT_ON_MATCH: (match_id) => {
    return preUrl + `api/v1/matches/${match_id}/comments`;
  },

  DEPOSIT_BALANCE: (user_id) => {
    return preUrl + `api/v1/users/${user_id}/balance`;
  },

  GET_MILLIONAIRES_RAKING: () => {
    return preUrl + `api/v1/users/millionaires`;
  },
};
