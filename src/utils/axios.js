import axios from 'axios';

const request = {
  server: axios.create({
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      'Content-Type': 'application/json',
    },
  }),

  thirdApi: axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
  }),
};

export default request;
