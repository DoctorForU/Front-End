import ReactModal from "react-modal";
import * as S from "./EmergencyLabel.styled";

export function Modal({ isOpen, closeModal }) {
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
        아무노래나 일단 틀어
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
