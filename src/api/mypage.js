import { mypageInstance } from "../utils";

export const getHealthCareData = async (userId) => {
  // 혈압, 체중
  try {
    const res = await mypageInstance.get(`/healthcare/${userId}`); //1. api-gateway jwt 설정 2. openfeign -> userId
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postHealthCareData = async (userId, data) => {
  try {
    const res = await mypageInstance.post(
      `/healthcare/register/${userId}`,
      data
    );
    return res.data.isSuccess;
  } catch (error) {
    console.log(error);
  }
};

export const getInquiriesData = async (userId) => {
  // 문의사항
  try {
    const res = await mypageInstance.get(`/inquiry/${userId}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postInquiriesData = async (data) => {
  try {
    const res = await mypageInstance.get("/inquiry/register", data);
    return res.data.isSuccess;
  } catch (error) {
    console.log(error);
  }
};

export const getHealthData = async (data) => {
  // 운동 기록
  try {
    const res = await mypageInstance.get("/healthdata", data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postRegisterExercise = async (data) => {
  // DailyHealth 운동 기록
  try {
    const res = await mypageInstance.post("/exercise/register", data);
    return res.data.isSuccess;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchExerciseData = async (exerciseName) => {
  try {
    const res = await mypageInstance.get(`/health/exercise/${exerciseName}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}