import styled from "styled-components";

export const CalendarContainer = styled.div`
  background-color: white;
  padding: 20px;
  width: 40%
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #2980b9;
  }
`;
