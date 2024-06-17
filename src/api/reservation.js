import { mypageInstance, reservationInstance } from "../utils";

export const getHospitalReservation = async (hpid) => {
  try {
    const res = await reservationInstance.get(`/toMypageForDate`, {
      params: { hpid },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postHospitalReservation = async (data) => {
  // 예약 등록
  try {
    const res = await reservationInstance.get(`/reservation`, data);
    return res.data.isSuccess;
  } catch (error) {
    console.log(error);
  }
};

export const getFastReservation = async (data) => {
  try {
    const res = await reservationInstance.get(`/fastReservation`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
