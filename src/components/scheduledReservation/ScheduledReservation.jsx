import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "../calendar";
import { Modal } from "./Modal";
import * as S from "./ScheduledReservation.styled";

export function ScheduledReservation() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const navigate = useNavigate();

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
      <Modal isOpen={isOpen} closeModal={closeModal} />
      <S.CalendarContainer>
        <p style={{ fontWeight: "bold" }}>진료예정</p>
        <S.Line></S.Line>
        <Calendar setSelectedDay={setSelectedDay} />
        <S.CalendarButtons>
          <S.Button
            primary
            onClick={() => {
              navigate("/hospital-search");
            }}
          >
            예약하기
          </S.Button>
          <S.Button onClick={openModal}>변경 및 취소</S.Button>
        </S.CalendarButtons>
      </S.CalendarContainer>
    </>
  );
}
