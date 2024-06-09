import ReactModal from "react-modal";
import * as S from "./HealthCare.styled";

export function Modal({ isOpen, closeModal, form, setForm }) {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "40em",
      height: "370px",
      margin: "auto",
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
    },
  };

  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <h2 style={{ fontWeight: "bold" }}>건강정보관리</h2>
      <S.InputForm>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <S.InputBox>
            <S.Input />
          </S.InputBox>
          <S.InputBox>
            <S.Input />
          </S.InputBox>
        </div>

        <S.InputBox style={{ width: "400px" }}>
          <S.Input />
        </S.InputBox>
      </S.InputForm>

      <S.ModalButton>
        <S.Button primary>저장</S.Button>
        <S.Button
          onClick={() => {
            closeModal();
          }}
        >
          취소
        </S.Button>
      </S.ModalButton>
    </ReactModal>
  );
}
