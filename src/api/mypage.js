import { mypageInstance } from "../utils";

export const getHealthData = async () => {
  // 혈압, 체중
  try {
    const res = await mypageInstance.get("/health");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postHealthData = async (data) => {
  try {
    const res = await mypageInstance.get("/health/register", data);
    return res.data.isSuccess;
  } catch (error) {
    console.log(error);
  }
};

export const getInquiriesData = async () => {
  // 문의사항
  try {
    const res = await mypageInstance.get("/inquiry");
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