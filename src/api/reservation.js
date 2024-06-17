import { reservationInstance } from "../utils";

export const getHospitalReservation = async (data) => {
  try {
    const res = await reservationInstance.get(`/reservation`, data);
    console.log({ res }); // 데이터 출력
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
