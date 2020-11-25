import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://polar-temple-24953.herokuapp.com',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});
