import { useNavigate } from "react-router-dom";
import { Header } from "../../../components";

import * as S from "./Main.styled";

export function Main() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <Header color="white" />
      <main
        style={{ display: "flex", flexDirection: "column", padding: "70px" }}
      >
        <S.Title>DoctorForU</S.Title>
        <S.BoxContainer>
          <S.Box
            onClick={() => {
              navigate("/hospital-search");
            }}
          >
            <S.Img src="img/Icon01.png" alt="Icon01" />
            <S.BoxTitle>병원 찾기</S.BoxTitle>
          </S.Box>
          <S.Box
            onClick={() => {
              navigate("/mypage/prescription");
            }}
          >
            <S.Img src="img/Icon02.png" alt="Icon02" />
            <S.BoxTitle>내 진료정보</S.BoxTitle>
            <S.BoxTitle style={{ marginTop: "0" }}>열람</S.BoxTitle>
          </S.Box>
          <S.Box>
            <S.Img src="img/Icon03.png" alt="Icon03" />
            <S.BoxTitle>투약 정보</S.BoxTitle>
          </S.Box>
        </S.BoxContainer>
        <S.BoxContainer>
          <S.Box>
            <S.Img src="img/Icon01.png" alt="Icon01" />
            <S.BoxTitle>병원 찾기</S.BoxTitle>
          </S.Box>
          <S.Box>
            <S.Img src="img/Icon02.png" alt="Icon02" />
            <S.BoxTitle>내 진료정보</S.BoxTitle>
            <S.BoxTitle style={{ marginTop: "0" }}>열람</S.BoxTitle>
          </S.Box>
          <S.Box>
            <S.Img src="img/Icon03.png" alt="Icon03" />
            <S.BoxTitle>투약 정보</S.BoxTitle>
          </S.Box>
        </S.BoxContainer>
      </main>
    </S.Container>
  );
}
