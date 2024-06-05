import { useState, useEffect } from "react";
import Modal from "react-modal";
import dayjs from "dayjs";

import * as S from "./Calendar.styled";
import * as R from "./ReactCalendar.styled";
import { useNavigate } from "react-router-dom";

// 날짜 리스트 데이터
const dayList = [
  "2024-06-10",
  "2024-06-21",
  "2024-06-02",
  "2024-06-14",
  "2024-06-27",
];

export function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [mark, setMark] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMark(dayList); // dayList 데이터를 mark 상태로 설정
  }, []);

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  };

  const closeModal = (e) => {
    document.body.style.overflow = "unset";
    setIsOpen(false);
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "40em",
      height: "480px",
      margin: "auto",
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
    },
  };

  const handleChange = (date) => {
    setSelectedDate(date);
    console.log(dayjs(date).format("YYYY-MM-DD")); // 날짜를 포맷하여 출력
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
              if (mark.includes(formattedDate)) {
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
