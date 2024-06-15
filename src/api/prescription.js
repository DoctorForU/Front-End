import { mypageInstance } from "../utils";

export const getPrescriptionData = async (identity) => {
  // 진단 내역
  try {
    const res = await mypageInstance.get(`/healthcare`);
  } catch (error) {
    console.log(error);
  }
};
