import styled from "styled-components";

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 35%;
  height: 500px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Line = styled.div`
  border: 1px solid #eef0f3;
  width: 100%;
  margin-bottom: 20px;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const CalendarTitle = styled.div`
  font-size: 1.2em;
`;

export const CalendarMonth = styled.div`
  font-size: 1.2em;
`;

export const Calendar = styled.div`
  height: 200px;
  background-color: #f2f3f4;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const CalendarButtons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#435CC8" : "white")};
  color: ${(props) => (props.primary ? "white" : "#435CC8")};
  border: ${(props) => (props.primary ? "none" : "2px solid #435CC8")};
  padding: 10px 20px;
  margin: 10px;
  width: 120px;
  border-radius: 10px;
  cursor: pointer;
`;
