import axios from 'axios';

let URL = '/api';

if (process.env.NODE_ENV !== 'development') {
  URL = process.env.REACT_APP_API_URL;
}

export default axios.create({
  baseURL: URL,
});
