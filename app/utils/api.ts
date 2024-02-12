import axios from 'axios';
import { devAPIURL } from './constants';

const apiInstance = axios.create({
  baseURL: devAPIURL, 
});

export default apiInstance;