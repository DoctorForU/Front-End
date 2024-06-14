import { useState, useEffect } from "react";
import { getSelectedHealthData } from "../../api";
import ReactModal from "react-modal";
import * as S from "./Health.styled";

const exampleData = {
  exercise: "하체 | 점프 스쿼트",
  totalWeight: 50,
  totalCount: 3,
  createAt: "2024-06-10",
};
export function Modal({ isOpen, closeModal, date }) {
  console.log(date);
  const [data, setData] = useState();

  useEffect(() => {
    handleHealthData();
  }, []);

  const handleHealthData = async () => {
    const selectedDate = {
      date: date,
    };
    const item = sessionStorage.getItem("userId");
    const res = await getSelectedHealthData(item, selectedDate);
    console.log(res);
    if (res) setData(res);
    else setData(exampleData);
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
        <span></span>
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
