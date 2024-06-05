import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 280px;
  margin-top: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Line = styled.div`
  border: 1px solid #eef0f3;
  width: 100%;
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Calendar = styled.div`
  cursor: pointer;
  display: flex;
`;

export const Table = styled.table`
  width: 100%;
`;

export const Td = styled.td`
  height: 25px;
  width: 25px;
  padding: 10px;
  margin: 0;
  border-radius: 50%;
  border: none;
  text-align: center;
  cursor: pointer;
  background-color: ${({ isToday }) => (isToday ? "#C6F7D9" : "white")};
  ${({ isSelected }) =>
    isSelected &&
    css`
      color: white;
      background-color: #319dff;
      border: 1px solid #435cc8;
    `};
`;

export const Tr = styled.tr`
  width: 1em;
`;
