import { mypageInstance } from "../utils";

export const getHealthData = async (data) => {
  // 혈압, 체중
  try {
    const res = await mypageInstance.get("/health", data);
    return res.data.isSuccess;
  } catch (error) {
    console.log(error);
  }
};
