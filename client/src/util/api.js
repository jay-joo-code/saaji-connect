import axios from 'axios';
import cfg from 'src/config';

const map = {
  development: cfg.BASE,
  release: cfg.BASE_RELEASE,
  production: cfg.BASE_PROD,
};

const url = map[process.env.NODE_ENV];
let URL = process.env.NODE_ENV === 'development' ? cfg.BASE : cfg.BASE_PROD;
if (process.env.IS_RELEASE) URL = cfg.release;

export default axios.create({
  baseURL: url,
});
