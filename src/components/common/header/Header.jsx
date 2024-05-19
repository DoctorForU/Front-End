import { useNavigate } from "react-router-dom";
import * as S from "./Header.styled";

export function Header() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Logo>Doctor For U</S.Logo>
      <S.Nav>
        <ul>
          <li>병원찾기</li>
          <li>질병 찾기</li>
          <li>응급진료</li>
        </ul>
      </S.Nav>
      <S.Menu>
        <div style={{ cursor: "pointer" }}>
          <span onClick={() => {navigate("/auth/login")}}>로그인</span>
          <span> | </span>
          <span onClick={() => {navigate("/auth/join")}}>회원가입</span>
        </div>
        <S.MenuButton>
          <span className="menu-button-line"></span>
          <span className="menu-button-line"></span>
          <span className="menu-button-line"></span>
        </S.MenuButton>
      </S.Menu>
    </S.Container>
  );
}
