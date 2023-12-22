
import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://185.204.2.233:8765/api',
  timeout: 5000,
});

export default instance;
