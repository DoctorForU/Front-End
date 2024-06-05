import axios from "axios";
//import { getItem } from '@sessionStorage'

//임시 URL
const BASE_URL = "http://localhost:9002";
const MyPage_URL = "http://localhost:8000/user-service";
const MS1_URL = "http://localhost:8000/hospital-service"; // 여긴 공통적인 부분만 넣기 여기 나중에 8000번 변경하기!! api-gateway로
// 병원 서비스를 로컬로 이용하고 싶다면 -> "http://localhost:9001/hospital-service"
// 병원 서비스를 API GATE WAY로 이용하고 싶다면 -> "http://localhost:8000/hospital-service"

const axiosAPI = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};

const axiosAuthAPI = (url, options) => {
  //const token = getItem('userInformation');
  const instance = axios.create({
    baseURL: url,
    //headers: { Authorization: 'Bearer ' + token },
    ...options,
  });
  return instance;
};

export const defaultInstance = axiosAPI(BASE_URL);
export const hospitalInstance = axiosAPI(MS1_URL);
export const authInstance = axiosAuthAPI(MyPage_URL);
