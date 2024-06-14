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

export const getReservationData = async () => {
  // 예약 내역
  try {
    const res = await mypageInstance.get("/reservation");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHealthData = async (userId) => {
  // 운동 기록
  try {
    const res = await mypageInstance.get(`/health/${userId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSelectedHealthData = async (userId, data) => {
  // 선택 날짜 운동 기록
  try {
    const res = await mypageInstance.get(`/health/select/${userId}`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
