import { useState } from "react";
import * as S from "./Modify.styled";

const exampleData = {
  userName: "김유진",
  userId: "uj0791",
  userEmail: "uj0791@naver.com",
};

export function Modify() {
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  //비밀번호 확인
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [errors, setErrors] = useState("");

  const validatePassword = (password) => {
    // 비밀번호 확인
    return form.userPassword === this.password;
  };

  const handleConfirmedPasswordChange = (e) => {
    const password = e.target.value;
    if (!validatePassword(password)) {
      setErrors("비밀번호가 일치하지 않습니다.");
      setConfirmPassword(false);
    } else {
      setErrors("");
      setConfirmPassword(true);
    }
  };

  const handlePhoneNumberChange = (e, part) => {
    // 전화번호 입력
    const value = e.target.value;
    let phoneNumber = form.phoneNumber.split("-");

    if (part === 0 && value.length <= 3) {
      phoneNumber[part] = value;
    } else if ((part === 1 || part === 2) && value.length <= 4) {
      phoneNumber[part] = value;
    }

    setForm({
      ...form,
      phoneNumber: phoneNumber.join("-"),
    });
  };

  return (
    <S.Container>
      <S.Title>
        <h1 style={{ margin: "2em 0 0 4em" }}>내 정보 수정</h1>
      </S.Title>
      <S.Content>
        {Object.entries(exampleData).map(([key, value]) => (
          <S.InputForm key={key}>
            <S.Label>
              {key === "userName"
                ? "이름"
                : key === "userId"
                ? "아이디"
                : "이메일"}
            </S.Label>
            <S.InputBox style={{ border: "none" }}>
              <S.Input
                type="text"
                style={{ color: "#8E8E8E" }}
                value={value}
                readOnly
              />
            </S.InputBox>
          </S.InputForm>
        ))}
        <S.InputForm>
          <S.Label>비밀번호</S.Label>
          <S.InputBox>
            <S.Input
              type="password"
              onChange={(e) =>
                setForm({ ...form, userPassword: e.target.value })
              }
              value={form.userPassword}
            />
          </S.InputBox>
        </S.InputForm>
        <S.InputForm>
          <S.Label>비밀번호 확인</S.Label>
          <S.InputBox>
            <S.Input
              type="password"
              onChange={handleConfirmedPasswordChange}
              value={form.confirmPassword}
            />
          </S.InputBox>
          {errors.password && (
            <S.Error style={{ color: "red" }}>{errors.password}</S.Error>
          )}
          {!errors.password && form.confirmPassword && (
            <S.Error style={{ color: "green" }}>비밀번호가 일치합니다.</S.Error>
          )}
        </S.InputForm>
        <S.InputForm style={{ borderBottom: "1px solid #aaaaaa" }}>
          <S.Label>휴대전화번호</S.Label>
          <S.InputBox style={{ width: "10%" }}>
            <S.Input
              style={{ width: "80%" }}
              onChange={(e) => handlePhoneNumberChange(e, 0)}
              value={form.phoneNumber.split("-")[0] || ""}
            />
          </S.InputBox>

          <span style={{ margin: "0 -35px 0 10px" }}>-</span>
          <S.InputBox style={{ width: "10%" }}>
            <S.Input
              style={{ width: "80%" }}
              onChange={(e) => handlePhoneNumberChange(e, 1)}
              value={form.phoneNumber.split("-")[1] || ""}
            />
          </S.InputBox>
          <span style={{ margin: "0 -35px 0 10px" }}>-</span>
          <S.InputBox style={{ width: "10%" }}>
            <S.Input
              style={{ width: "80%" }}
              onChange={(e) => handlePhoneNumberChange(e, 2)}
              value={form.phoneNumber.split("-")[2] || ""}
            />
          </S.InputBox>
        </S.InputForm>
      </S.Content>
      <S.ButtonContainer>
        <S.Button>저장</S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
}
