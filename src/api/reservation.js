import { mypageInstance, reservationInstance } from "../utils";

export const getHospitalReservation = async (hpid) => {
  try {
    const res = await reservationInstance.get(`/toMypageForDate`, hpid);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postHospitalReservation = async (data) => {
  try {
    const res = await reservationInstance.get(`/reservation`, data);
    return res.data.isSuccess;
  } catch (error) {
    console.log(error);
  }
};
