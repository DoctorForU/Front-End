import { useNavigate } from "react-router-dom";
import * as S from "./Header.styled";

export function Header({ color }) {
  const navigate = useNavigate();
  return (
    <S.Container color={color}>
      <S.Logo
        onClick={() => {
          navigate("/");
        }}
      >
        Doctor For U
      </S.Logo>
      <S.Nav>
        <ul>
          <li>병원 검색</li>
          <li>응급실 검색</li>
          <li>질병 검색</li>
          <li>의료 제품 검색</li>
        </ul>
      </S.Nav>
      <S.Menu>
        <div style={{ cursor: "pointer" }}>
          <span
            onClick={() => {
              navigate("/auth/login");
            }}
          >
            로그인
          </span>
          <span> | </span>
          <span
            onClick={() => {
              navigate("/auth/join");
            }}
          >
            회원가입
          </span>
        </div>
        <S.MenuButton color={color}>
          <span className="menu-button-line"></span>
          <span className="menu-button-line"></span>
          <span className="menu-button-line"></span>
        </S.MenuButton>
      </S.Menu>
    </S.Container>
  );
}
