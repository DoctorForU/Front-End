import axios from "axios";
import Cookies from "js-cookie";

//임시 URL
const BASE_URL = "http://localhost:9002";
const MS1_URL = "http://localhost:8000/hospital-service";
const MS3_URL = "http://localhost:8000/user-service";
const MS4_URL = "http://localhost:8080/mypage-service";
const MS5_URL = "http://localhost:8000/reservation-service";
// 병원 서비스를 로컬로 이용하고 싶다면 -> "http://localhost:9001/hospital-service"
// 병원 서비스를 API GATE WAY로 이용하고 싶다면 -> "http://localhost:8000/hospital-service"

const axiosAPI = (url, options) => {
  const instance = axios.create({
    baseURL: url,
    ...options,
  });
  return instance;
};

const axiosAuthAPI = (url, options) => {
  const instance = axios.create({
    baseURL: url,
    withCredentials: true,
    ...options,
  });
  return instance;
};

export const onLoginSuccess = (response, setUserId) => {
  const userId = response.data.userId;
  Cookies.set("accessToken", response.data.token, { httpOnly: true });
  //setUserId(userId);
  sessionStorage.setItem("userId", userId);
};

export const defaultInstance = axiosAPI(BASE_URL);
export const hospitalInstance = axiosAPI(MS1_URL);
export const authInstance = axiosAuthAPI(MS3_URL);
export const mypageInstance = axiosAuthAPI(MS4_URL);
export const reservationInstance = axiosAPI(MS5_URL);
