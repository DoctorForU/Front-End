import { useState } from "react";
import { Layout } from "../../../components/common";

import * as S from "./Join.styled";

export function Join() {
  const [form, setForm] = useState({
    userName: "",
    userId: "",
    userEmail: "",
    userPasssword: "",
    userPhoneNumber:""
  });

  const [confirm, setConfirm] = useState({
    id: false, //아이디 중복 체크
    password: false, //비밀번호 확인
    email: false, //이메일 확인
  });

  const [verify, setVerify] = useState({
    email: "", //이메일 인증코드
    password: "", //비밀번호 확인
  })

  const onConfirmedId = (e) => {
    //아이디 중복 체크(api)
    if (true) {
      setConfirm.id(true);
      alert("사용 가능한 아이디입니다.");
    } else {
      setConfirm.id(false);
      alert("사용중인 아이디입니다.");
    }
  };

  const onConfirmedPassword = (e) => {
    setVerify.password(e.target.value);
    setConfirm.password(form.userPasssword === verify.password);
  };

  const onConfirmEmail = (e) => {
    //이메일 확인
    if (true) {
      setConfirm.email(true);
      alert("이메일이 확인되었습니다.");
    } else {
      setConfirm.email(false);
      alert("이메일을 다시 확인해주세요.");
    }
  }

  const onSubmit = () => {
    
  }

  return (
    <Layout>
      <S.Line></S.Line>
      <S.JoinInfo>
        <h1 style={{ fontSize: "40px" }}>회원가입</h1>
        <S.InfoContainer>
          <div>- 아래의 정보들은 이용자 동의없이 공개되지 않습니다.</div>
          <div style={{ color: "#4288DD" }}>
            - 이메일 등 입력된 개인정보가 부정확할 시 서비스 이용에 어려움을
            겪으실 수 있습니다.
          </div>
        </S.InfoContainer>
      </S.JoinInfo>
      <S.JoinContainer>
        <S.JoinForm>
          <S.InputForm>
            <S.Label>
              이름<S.Required>*</S.Required>
            </S.Label>
            <S.InputBox>
              <S.Input
                onChange={(e) => setForm({ ...form, userName: e.target.value })}
                value={form.userName}
              />
            </S.InputBox>
          </S.InputForm>
          <S.InputForm>
            <S.Label>
              아이디<S.Required>*</S.Required>
            </S.Label>
            <S.InputBox style={{ width: "20%" }}>
              <S.Input
                placeholder="6~12자 영문 소문자와 숫자"
                onChange={(e) => setForm({ ...form, userId: e.target.value })}
                value={form.userId}
              />
            </S.InputBox>
            <S.CheckButton onClick={onConfirmedId}>중복체크</S.CheckButton>
          </S.InputForm>
          <S.InputForm>
            <S.Label>
              비밀번호<S.Required>*</S.Required>
            </S.Label>
            <S.InputBox>
              <S.Input
                type="password"
                onChange={(e) =>
                  setForm({ ...form, userPasssword: e.target.value })
                }
                value={form.userPasssword}
              />
            </S.InputBox>
          </S.InputForm>
          <S.InputForm>
            <S.Label>
              비밀번호 확인<S.Required>*</S.Required>
            </S.Label>
            <S.InputBox>
              <S.Input
                type="password"
                onChange={onConfirmedPassword}
                value={verify.password}
              />
            </S.InputBox>
          </S.InputForm>
          <S.InputForm>
            <S.Label>
              이메일<S.Required>*</S.Required>
            </S.Label>
            <S.InputBox style={{ width: "20%" }}>
              <S.Input
                type="email"
                onChange={(e) =>
                  setForm({ ...form, userEmail: e.target.value })
                }
                value={form.userEmail}
              />
            </S.InputBox>
            <S.CheckButton onClick={onConfirmEmail}>인증요청</S.CheckButton>
          </S.InputForm>
          <S.InputForm>
            <S.Label>
              이메일 확인<S.Required>*</S.Required>
            </S.Label>
            <S.InputBox style={{ width: "20%" }}>
              <S.Input
                type="number"
                onChange={(e) =>
                  setForm({ ...verify, email: e.target.value })
                }
                value={verify.email}
              />
            </S.InputBox>
            <S.CheckButton onClick={onConfirmEmail}>인증요청</S.CheckButton>
          </S.InputForm>
          <S.InputForm>
            <S.Label>
              휴대전화번호<S.Required>*</S.Required>
            </S.Label>
            <S.InputBox style={{ width: "10%" }}>
              <S.Input
                type="number"
                style={{ width: "50%" }}
                onChange={(e) =>
                  setForm({ ...form, userEmail: e.target.value })
                }
                value={form.userEmail}
              />
            </S.InputBox>

            <span style={{ margin: "0 -35px 0 10px" }}>-</span>
            <S.InputBox style={{ width: "10%" }}>
              <S.Input
                type="number"
                style={{ width: "50%" }}
                onChange={(e) =>
                  setForm({ ...form, userEmail: e.target.value })
                }
                value={form.userEmail}
              />
            </S.InputBox>
            <span style={{ margin: "0 -35px 0 10px" }}>-</span>
            <S.InputBox style={{ width: "10%" }}>
              <S.Input
                type="number"
                style={{ width: "50%" }}
                onChange={(e) =>
                  setForm({ ...form, userEmail: e.target.value })
                }
                value={form.userEmail}
              />
            </S.InputBox>
          </S.InputForm>
        </S.JoinForm>
      </S.JoinContainer>
      <S.Button>가입하기</S.Button>
      <S.LineContainer>
        <S.Line style={{ width: "200px" }}></S.Line>
        <div style={{ color: "#9A9FAB" }}>SNS 계정으로 로그인</div>
        <S.Line style={{ width: "200px" }}></S.Line>
      </S.LineContainer>
      <S.SocialContainer>
        <div>Google</div>
        <div>Kakao</div>
      </S.SocialContainer>
    </Layout>
  );
}
