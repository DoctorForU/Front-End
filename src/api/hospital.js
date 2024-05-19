import { defaultInstance } from "../utils";

export const postHospitals = async (data) => {
  try {
    const { res } = await defaultInstance.get("/hospital", data);

    console.log(res.data); //데이터 출력
    return res;
  } catch (error) {
    console.log(error);
  }
};
