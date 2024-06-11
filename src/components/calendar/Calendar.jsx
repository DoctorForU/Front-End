import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getReservationData } from "../../api";
import dayjs from "dayjs";

import * as S from "./Calendar.styled";
import * as R from "./ReactCalendar.styled";

// 날짜 리스트 데이터
const exampleData = [
  "2024-06-10",
  "2024-06-21",
  "2024-06-02",
  "2024-06-14",
  "2024-06-27",
];

export function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    handleReservationData();
  }, []);

  const handleReservationData = async () => {
    const res = await getReservationData();
    if (res) {
      setData(res);
    } else setData(exampleData);
  };

  const handleChange = (date) => {
    setSelectedDate(date);
    console.log(dayjs(date).format("YYYY-MM-DD")); // 날짜를 포맷하여 출력
  };

  return (
    <>
      <S.CalendarContainer>
        <p style={{ fontWeight: "bold" }}>진료예정</p>
        <S.Line></S.Line>
        <R.StyledCalendar
          onChange={handleChange}
          value={selectedDate}
          showNeighboringMonth={false}
          tileContent={({ date, view }) => {
            if (view === "month") {
              const formattedDate = dayjs(date).format("YYYY-MM-DD");
              if (data.includes(formattedDate)) {
                return <div className="dot"></div>;
              }
            }
            return null;
          }}
          formatDay={(locale, date) =>
            date.toLocaleString("en", { day: "numeric" })
          }
        />
        <S.CalendarButtons>
          <S.Button
            primary
            onClick={() => {
              navigate("/hospital-search");
            }}
          >
            예약하기
          </S.Button>
          <S.Button>변경 및 취소</S.Button>
        </S.CalendarButtons>
      </S.CalendarContainer>
    </>
  );
}
