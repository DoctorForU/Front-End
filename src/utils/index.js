import axios from "axios";
//import { getItem } from '@sessionStorage'

//임시 URL
const BASE_URL = 'http://localhost:3000';
const MS1_URL ='http://localhost:8000/hospital-service'; // 여긴 공통적인 부분만 넣기

const axiosAPI = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
}

const axiosAuthAPI = (url, options) => {
  //const token = getItem('userInformation');
  const instance = axios.create({
    baseURL: url,
    //headers: { Authorization: 'Bearer ' + token },
    ...options,
  });
  return instance;
}

export const defaultInstance = axiosAPI(BASE_URL);
export const hospitalInstance = axiosAPI(MS1_URL);
export const authInstance = axiosAuthAPI(BASE_URL)

/*
  유진아
  이거 
  headers: {
    'Content-Type': 'application/json',
  },
  이것도 포함되어 있다는 거지?
*/