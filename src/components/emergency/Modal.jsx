import { useState } from "react";
import ReactModal from "react-modal";
import { postEmergency, getEmergencyMessage } from "../../api"; // 메시지 요청 버튼 만들기

import * as S from "./EmergencyLabel.styled";
import { useEffect } from "react";

export function Modal({ isOpen, closeModal, hpid }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleModalMessage(); //처음 실행 -> 초기화 개념
  }, []);

  const handleModalMessage = async () => {
    const res = await getEmergencyMessage(hpid);
    if (res) {
      setData(res);
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
      <div>
        {hpid}
        <S.ModalButton
          onClick={() => {
            closeModal();
          }}
        >
          닫기
        </S.ModalButton>
      </div>
    </ReactModal>
  );
}
