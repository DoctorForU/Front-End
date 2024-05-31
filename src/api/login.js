import { authInstance } from "../utils";

export const postLogin = async (data) => {
  // 아이디 중복 확인
  try {
    const res = await authInstance.post("/login", data);
    return res.data.isSuccess;
  } catch (error) {
    console.log(error);
  }
};
