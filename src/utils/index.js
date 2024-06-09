import axios from "axios";
import { useContext } from "react";
import { postRefresh } from "../api";
import { IsLoginContext } from "../hooks";

axios.defaults.withCredentials = true; // refreshToken cookie

//임시 URL
const BASE_URL = "http://localhost:9002";
const MS3_URL = "http://localhost:8000/user-service";
const MS4_URL = "http://localhost:8080/mypage-service";
const MS1_URL = "http://localhost:8000/hospital-service";
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
    ...options,
  });
  return instance;
};

export function onLoginSuccess(res) {
  const { accessToken } = res.data;
  const JWT_EXPIRRY_TIME = 24 * 3600 * 1000; // 24시간

  // accessToken 설정
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  // accessToken 만료하기 1분 전에 로그인 연장
  setTimeout(postRefresh, JWT_EXPIRRY_TIME - 60000);
}

export const defaultInstance = axiosAPI(BASE_URL);
export const hospitalInstance = axiosAPI(MS1_URL);
export const authInstance = axiosAuthAPI(MS3_URL);
export const mypageInstance = axiosAuthAPI(MS4_URL);
