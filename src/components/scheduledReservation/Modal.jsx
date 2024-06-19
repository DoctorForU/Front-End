import ReactModal from "react-modal";
import { useEffect, useState } from "react";
import { ChangeReservation } from "./";
import { ReservationTimetable } from "../../components";
import {
  getReservationList,
  deleteHospitalReservation,
  getHospitalReservation,
} from "../../api";

import * as S from "./ScheduledReservation.styled";

const exampleData = [
  {
    hpid: "A1116538",
    dutyName: "서울 병원",
    reserveDate: "2024-06-17",
    reserveTime: "1400-1430",
  },
  {
    hpid: "A1116538",
    dutyName: "서울 병원",
    reserveDate: "2024-06-17",
    reserveTime: "1400-1430",
  },
];

export function Modal({ isOpen, closeModal }) {
  const [data, setData] = useState([]); // 전체 예약 내역
  const [item, setItem] = useState({}); // 선택 예약 내역
  const [selectedDay, setSelectedDay] = useState(null);
  const [isClick, setIsClick] = useState(false);

  const convertTimeFormat = (time) => {
    const times = time.split("-");
    const startHour = times[0].substring(0, 2);
    const startMinute = times[0].substring(2);
    const endHour = times[1].substring(0, 2);
    const endMinute = times[1].substring(2);

    return `${startHour}:${startMinute} - ${endHour}:${endMinute}`;
  };

  useEffect(() => {
    handelGetReservation();
  }, []);

  const handelGetReservation = async () => {
    // 예약 내역
    const userId = sessionStorage.getItem("userId");
    const data = {
      userId: userId,
    };
    const res = await getReservationList(data);
    if (res) setData(res);
    else setData(exampleData);
  };

  const onCancelReservation = async (reservationId) => {
    const res = await deleteHospitalReservation(reservationId);
    if (res) {
      alert("예약 취소되었습니다.");
      closeModal();
    }
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      width: "40em",
      height: "400px",
      margin: "auto",
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
    },
  };

  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      {!isClick ? (
        <>
          <S.Title>
            <h2 style={{ fontWeight: "bold" }}>예약 내역</h2>
            <S.ModalButton
              onClick={() => {
                closeModal();
              }}
            >
              <span style={{ fontSize: "30px", fontWeight: "lighter" }}>x</span>
            </S.ModalButton>
          </S.Title>
          <S.Line></S.Line>
          <S.Table>
            {data.map((item, index) => (
              <S.TableRow key={index}>
                <S.TableCell style={{ color: "black" }}>
                  {item.dutyName}
                </S.TableCell>
                <S.TableCell>{item.reserveDate}</S.TableCell>
                <S.TableCell>{convertTimeFormat(item.reserveTime)}</S.TableCell>
                <S.TableCell>
                  <S.ModalButton
                    onClick={() => {
                      setItem(item);
                      console.log(item);
                      setIsClick(true);
                    }}
                  >
                    변경
                  </S.ModalButton>
                  <span style={{ fontSize: "18px", color: "black" }}>/</span>
                  <S.ModalButton
                    onClick={() => {
                      onCancelReservation(item.id);
                    }}
                  >
                    취소
                  </S.ModalButton>
                </S.TableCell>
              </S.TableRow>
            ))}
          </S.Table>
        </>
      ) : (
        <>
          <S.Title>
            <h2 style={{ fontWeight: "bold" }}>예약 변경</h2>
            <S.ModalButton
              onClick={() => {
                setIsClick(false);
                closeModal();
              }}
            >
              <span style={{ fontSize: "30px", fontWeight: "lighter" }}>x</span>
            </S.ModalButton>
          </S.Title>
          <S.Line></S.Line>
          <h3 style={{ fontWeight: "bold" }}>병원명: {item.dutyName}</h3>
          <ChangeReservation
            setSelectedDay={setSelectedDay}
            item={item}
            closeModal={closeModal}
          />
        </>
      )}
    </ReactModal>
  );
}
