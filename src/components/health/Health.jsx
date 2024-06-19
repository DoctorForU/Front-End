import React, { useState, useEffect } from "react";
import { getHealthData } from "../../api";
import { Modal } from "./";
import * as S from "./Health.styled";

const exampleData = {
  totalTime: 50,
  totalExercise: 3,
  totalWeight: 150,
};

export function Health() {
  const now = new Date();
  const today = now.getDate();
  const thisMonth = now.getMonth();
  const thisYear = now.getFullYear();
  const todayWeak = now.getDay();
  const lastday = new Date(thisYear, thisMonth + 1, 0).getDate();

  const [data, setData] = useState(exampleData);
  const [isOpen, setIsOpen] = useState(false);

  // 주간 달력
  const [daylist, setDaylist] = useState([]);
  const [selectedDate, setSelectedDate] = useState({
    day: today,
    month: thisMonth,
    year: thisYear,
  });

  useEffect(() => {
    handleHealthData();
  }, []);

  const handleHealthData = async () => {
    // 대시보드 운동 기록
    const data = {
      userId: sessionStorage.getItem("userId"),
      selectedDate: selectedDate,
    };
    const res = await getHealthData(data);
    console.log(res);
    if (res) setData(res);
    else setData(exampleData);
  };

  useEffect(() => {
    // 날짜 초기화
    setDaylist(getAlldate(today, lastday, thisMonth, thisYear));
  }, [today, lastday, todayWeak, thisMonth, thisYear]);

  function getAlldate(today, lastday, month, year) {
    let dates = [];
    let startDay = today - 7; // 현재 날짜 -7일
    let currentMonth = month;
    let currentYear = year;

    if (startDay < 1) {
      // 이전달 날짜 처리
      const previousMonthLastDay = new Date(year, month, 0).getDate();
      startDay = previousMonthLastDay + startDay;
      currentMonth = month - 1;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear = year - 1;
      }
    }

    for (let i = 0; i < 15; i++) {
      // 주간 달력
      const dateObj = new Date(currentYear, currentMonth, startDay + i);
      const day = dateObj.getDate();
      const month = dateObj.getMonth();
      const year = dateObj.getFullYear();
      dates.push({ day, month, year, isCurrentMonth: month === thisMonth });
    }
    return dates;
  }

  const handleDayClick = (day, month, year) => {
    setSelectedDate({ day, month, year });
    const formattedDate = `${year}-${String(month + 1).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}`;
    console.log(`Selected date: ${formattedDate}`);
  };

  const getFormattedDate = (day, month, year) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
  };

  const getDataForSelectedDate = (selectedDate) => {
    const formattedDate = getFormattedDate(
      selectedDate.day,
      selectedDate.month,
      selectedDate.year
    );
    if (Array.isArray(data)) {
      const selectedData = data.find(
        (record) => record.createAt === formattedDate
      );
      return selectedData || { totalTime: 0, totalExercise: 0, totalWeight: 0 };
    } else {
      return { totalTime: 0, totalExercise: 0, totalWeight: 0 };
    }
  };

  const selectedData = getDataForSelectedDate(selectedDate);

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  };

  const closeModal = (e) => {
    document.body.style.overflow = "unset";
    setIsOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        data={selectedDate}
        date={data}
      />
      <S.Container>
        <p style={{ fontWeight: "bold" }}>운동기록</p>
        <S.Line style={{ height: "auto", width: "100%" }}></S.Line>
        <S.Calendar>
          <S.Table>
            <tbody>
              <tr>
                {daylist.map(({ day, month, year, isCurrentMonth }, index) => (
                  <S.Td
                    key={index}
                    isToday={
                      day === today && month === thisMonth && year === thisYear
                    }
                    isSelected={
                      // 선택 날짜
                      day === selectedDate.day &&
                      month === selectedDate.month &&
                      year === selectedDate.year
                    }
                    isCurrentMonth={isCurrentMonth}
                    onClick={() => handleDayClick(day, month, year)}
                  >
                    {day}
                  </S.Td>
                ))}
              </tr>
            </tbody>
          </S.Table>
        </S.Calendar>
        <S.HealthContainer>
          <S.HealthContent>
            <S.Img src="/img/Icon17.png" alt="Icon17" />
            <span>{selectedData.totalTime}분</span>
            <span style={{ color: "#8799AB" }}>운동 시간</span>
          </S.HealthContent>
          <S.Line></S.Line>
          <S.HealthContent>
            <S.Img src="/img/Icon18.png" alt="Icon18" />
            <span>{selectedData.totalExercise}개</span>
            <span style={{ color: "#8799AB" }}>운동 개수</span>
          </S.HealthContent>
          <S.Line></S.Line>
          <S.HealthContent>
            <S.Img src="/img/Icon19.png" alt="Icon19" />
            <span>
              {selectedData.totalWeight ? data.totalWeight + "Kg" : "-"}
            </span>
            <span style={{ color: "#8799AB" }}>총 중량</span>
          </S.HealthContent>
          <S.Button onClick={openModal}>운동 현황</S.Button>
        </S.HealthContainer>
      </S.Container>
    </>
  );
}
