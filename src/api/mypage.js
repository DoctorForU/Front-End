import { mypageInstance } from "../utils";

export const getHealthData = async (userId) => {
  // 혈압, 체중
  try {
    const res = await mypageInstance.get(`/health/${userId}`); //1. api-gateway jwt 설정 2. openfeign -> userId
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postHealthData = async (userId, data) => {
  try {
    const res = await mypageInstance.post(`/health/register/${userId}`, data);
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
