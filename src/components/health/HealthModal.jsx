import { useState, useEffect } from "react";
import { postToGetExercise } from "../../api";
import ReactModal from "react-modal";
import * as S from "./Health.styled";

const exampleData = {
  exercise: "하체 | 점프 스쿼트",
  totalWeight: 50,
  totalCount: 3,
  createAt: "2024-06-10",
};
export function Modal({ isOpen, closeModal, date }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleGetExercise();
  }, [date]);

  const handleGetExercise = async () => {
    console.log("현재 날짜: " + date);
    const data = {
      userId: sessionStorage.getItem("userId"),
      selectedDate: date,
    };
    const res = await postToGetExercise(data);
    console.log(" 운동기록 목록: " + res);
    if (res) {
      setData(res); // 여기에 spread operator를 사용하지 않습니다.
    }
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      width: "50em",
      height: "400px",
      margin: "auto",
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
    },
  };

  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <h2 style={{ fontWeight: "bold" }}>{date}</h2>
      <S.Line style={{ height: "auto", width: "100%" }}></S.Line>
      <S.Content>
        {data.map((exercise, index) => (
          <>
            <div key={index}>
              <span>{exercise.exerciseName}</span>
              <span>{exercise.exerciseWeight}kg</span>
              <span>{exercise.exerciseCount}회</span>
            </div>
          </>
        ))}
        <S.Button
          style={{ height: "50px", margin: "0" }}
          onClick={() => {
            closeModal();
          }}
        >
          닫기
        </S.Button>
      </S.Content>
    </ReactModal>
  );
}
