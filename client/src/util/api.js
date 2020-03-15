import axios from 'axios';

let URL = '/api';

if (process.env.NODE_ENV !== 'development') {
  console.log('env is not development. set custom api url')
  console.log('process.env.CUSTOM_API_URL', process.env.REACT_APP_API_URL);
  URL = process.env.REACT_APP_API_URL;
}

console.log('baseURL: ', URL)

export default axios.create({
  baseURL: URL,
});
