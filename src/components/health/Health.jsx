import React, { useState, useEffect } from "react";
import * as S from "./Health.styled";

export function Health() {
  const now = new Date();
  const today = now.getDate();
  const thisMonth = now.getMonth();
  const thisYear = now.getFullYear();
  const todayWeak = now.getDay();
  const lastday = new Date(thisYear, thisMonth + 1, 0).getDate();

  const [daylist, setDaylist] = useState([]);
  const [selectedDate, setSelectedDate] = useState({
    day: today,
    month: thisMonth,
    year: thisYear,
  });

  useEffect(() => {
    setDaylist(getAlldate(today, lastday, thisMonth, thisYear));
  }, [today, lastday, todayWeak, thisMonth, thisYear]);

  function getAlldate(today, lastday, month, year) {
    let dates = [];
    let startDay = today - 7;
    let currentMonth = month;
    let currentYear = year;

    if (startDay < 1) {
      const previousMonthLastDay = new Date(year, month, 0).getDate();
      startDay = previousMonthLastDay + startDay;
      currentMonth = month - 1;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear = year - 1;
      }
    }

    for (let i = 0; i < 15; i++) {
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

  return (
    <S.Container>
      <p style={{ fontWeight: "bold" }}>운동기록</p>
      <S.Line></S.Line>
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
    </S.Container>
  );
}
