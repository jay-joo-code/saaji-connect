import axios from 'axios';
import cfg from 'src/config';

const map = {
  development: cfg.BASE,
  release: cfg.BASE_RELEASE,
  production: cfg.BASE_PROD,
};

const url = map[process.env.NODE_ENV];

export default axios.create({
  baseURL: url,
});
