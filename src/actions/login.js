import { LOGIN } from '../constant/constant';
import request from './../utils/axios';
import { URL } from './../config/end-points-url';
import * as axios from 'axios';

export const login = (user) => {
  return async (dispatch) => {
    dispatch(requestLogin());

    try {
      const response = await axios.post(URL.LOGIN(), {
        username: user.username,
        password: user.password,
      });
      //   try {
      //     const response = await fetch('http://two-football-laravel.herokuapp.com/login', {
      //       method: 'POST',
      //       body: JSON.stringify({
      //         username: 'dung',
      //         password: '123456',
      //       }),
      //       mode: 'no-cors',
      //       headers: {
      //         'Content-type': 'application/json; charset=UTF-8',
      //       },
      //     }).then((res) => console.log(res));
      //   } catch (error) {
      //     throw new Error(error);
      //   }

      const data = response.data;

      if (data.status == true) {
        localStorage.setItem('jwtToken', data.access_token);
        localStorage.setItem('user', JSON.stringify(data.user));

        request.server = await axios.create({
          headers: {
            Authorization: 'Bearer ' + data.access_token,
            'Content-Type': 'application/json',
          },
        });

        dispatch(loginSuccess({ user: data.user }));
      } else {
        throw new Error(data.errors);
      }
    } catch (error) {
      dispatch(loginFail(error));
    }
  };
};

export const requestLogin = () => ({
  type: LOGIN.LOGIN_REQUEST,
});

export const loginSuccess = ({ user }) => ({
  type: LOGIN.LOGIN_SUCCESS,
  payload: {
    user,
  },
});

export const loginFail = (error) => ({
  type: LOGIN.LOGIN_FAIL,
  payload: {
    error,
  },
});
