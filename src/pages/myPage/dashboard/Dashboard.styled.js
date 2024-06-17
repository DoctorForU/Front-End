import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: calc(100% - 250px);
  padding: 30px;
  background-color: #ecf0f1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  gap: 30px;
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 560px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Line = styled.div`
  border: 1px solid #eef0f3;
  width: 100%;
  margin-bottom: 20px;
`;

export const CalendarButtons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 15px;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#435CC8" : "white")};
  color: ${(props) => (props.primary ? "white" : "#435CC8")};
  border: ${(props) => (props.primary ? "none" : "2px solid #435CC8")};
  padding: 10px 20px;
  margin: 15px;
  width: 120px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? "#324A9E" : "#white")};
    color: ${(props) => (props.primary ? "white" : "#324A9E")};
    font-weight: ${(props) => (props.primary ? "" : "bold")};
  }
`;