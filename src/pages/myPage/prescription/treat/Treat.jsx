import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetIsLogin } from "../../../../hooks";
import * as S from "./Treat.styled";

export function Treat() {
  const isLogin = useGetIsLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/auth/login");
      alert("로그인후 사용가능한 서비스입니다.");
    }
  }, []);

  const data = [
    {
      id: 1,
      name: "약국[동구 안심로22길]",
      date: "2022-06-06",
      type: "처방조제",
      visits: 1,
      prescriptions: 1,
      requests: 1,
    },
    {
      id: 2,
      name: "비인후과의원[동구 안심로22길]",
      date: "2022-06-06",
      type: "일반외래",
      visits: 1,
      prescriptions: 1,
      requests: 1,
    },
  ];

  return (
    <S.Container>
      <S.Title>
        <h1 style={{ margin: "2em 0 0 4em" }}>진단 내역</h1>
      </S.Title>
      <S.Table>
        <thead>
          <S.TableRow>
            <S.TableHeader>번호</S.TableHeader>
            <S.TableHeader>병·의원(약국) 명</S.TableHeader>
            <S.TableHeader>진료개시일</S.TableHeader>
            <S.TableHeader>진료형태</S.TableHeader>
            <S.TableHeader>방문(입원)일수</S.TableHeader>
            <S.TableHeader>처방횟수</S.TableHeader>
            <S.TableHeader>투약(요양)횟수</S.TableHeader>
          </S.TableRow>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <S.TableRow>
              <S.TableCell colSpan="7">
                <S.EmptyMessage>문의 내역이 없습니다.</S.EmptyMessage>
              </S.TableCell>
            </S.TableRow>
          ) : (
            data.map((item) => (
              <S.TableRow key={item.id}>
                <S.TableCell>{item.id}</S.TableCell>
                <S.TableCell>{item.name}</S.TableCell>
                <S.TableCell>{item.date}</S.TableCell>
                <S.TableCell>{item.type}</S.TableCell>
                <S.TableCell>{item.visits}</S.TableCell>
                <S.TableCell>{item.prescriptions}</S.TableCell>
                <S.TableCell>{item.requests}</S.TableCell>
              </S.TableRow>
            ))
          )}
        </tbody>
      </S.Table>
    </S.Container>
  );
}
