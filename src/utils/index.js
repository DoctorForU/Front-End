import axios from "axios";
import { getItem } from '@sessionStorage'

//임시 URL
const BASE_URL = 'http://localhost:3000';

const axiosAPI = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
}

const axiosAuthAPI = (url, options) => {
  const token = getItem('userInformation');
  const instance = axios.create({
    baseURL: url,
    headers: { Authorization: 'Bearer ' + token },
    ...options,
  });
  return instance;
}

export const defaultInstance = axiosAPI(BASE_URL);
export const authInstance = axiosAuthAPI(BASE_URL)