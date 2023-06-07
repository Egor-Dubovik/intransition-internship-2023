import axios from 'axios';
import { API_URL } from '../common/constant/api';

const $api = axios.create({
  baseURL: API_URL,
});

export default $api;
