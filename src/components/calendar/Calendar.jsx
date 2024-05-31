import { useState } from "react";
import * as S from "./Calendar.styled";

export function Calendar() {
  const [date, setDate] = useState(new Date());

  return (
    <S.CalendarContainer>
      <S.CalendarHeader>
        <S.CalendarTitle>진료예정</S.CalendarTitle>
        <S.CalendarMonth>1월 2024</S.CalendarMonth>
      </S.CalendarHeader>
      <S.Calendar></S.Calendar>
      <S.CalendarButtons>
        <S.Button>예약하기</S.Button>
        <S.Button>변경 및 취소</S.Button>
      </S.CalendarButtons>
    </S.CalendarContainer>
  );
}
