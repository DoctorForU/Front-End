import { useState } from "react";
import dayjs from "dayjs";

import * as S from "./Calendar.styled";
import * as R from "./ReactCalendar.styled";

// 날짜 리스트 데이터
const dayList = [
  "2023-03-10",
  "2023-03-21",
  "2023-04-02",
  "2023-04-14",
  "2023-04-27",
];

export function Calendar() {
  const curDate = new Date(); // 현재 날짜
  const [value, setValue] = useState(curDate); // 클릭한 날짜
  const [date, setDate] = useState(new Date());
  const [mark, setMark] = useState([]);

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const onSubmit = async () => {
    //진료 내역
    const data = {};
    console.log(data);
    // const res = await postTreat(data);
    // if (res) {
    //   alert("기존 값을 불러옵니다.");
    // } else alert("로그인 후 사용 가능합니다.");
  };

  return (
    <S.CalendarContainer>
      <p style={{ fontWeight: "bold" }}>진료예정</p>
      <S.Line></S.Line>
      <R.StyledCalendar
        onChange={onChange}
        value={date}
        showNeighboringMonth={false}
        tileContent={({ date }) => {
          let html = [];
          // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
          if (mark.find((x) => x === dayjs(date).format("YYYY-MM-DD"))) {
            html.push(<div className="dot"></div>);
          }
          // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
          return (
            <>
              <div className="flex justify-center items-center absoluteDiv">
                {html}
              </div>
            </>
          );
        }}
        formatDay={(locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }
      />
      <S.CalendarButtons>
        <S.Button primary>예약하기</S.Button>
        <S.Button>변경 및 취소</S.Button>
      </S.CalendarButtons>
    </S.CalendarContainer>
  );
}
