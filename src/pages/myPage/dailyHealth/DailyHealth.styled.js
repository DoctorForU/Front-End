import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  background-color: #f4f6f9;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 40px;
`;

export const Card = styled.div`
  display: flex;
  width: 90%;
  height: 150px;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 50px;
  padding: 0.5em;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Table = styled.table`
  width: 95%;
  margin: 30px;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  height: 40px;
  border-bottom: 1px solid #ddd;
  color: #a5b3c0;
  padding: 8px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

export const TableRow = styled.tr`
  padding: 8px;
`;

export const TableCell = styled.td`
  height: 30px;
  border-top: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

export const CheckBox = styled.input`
  cursor: pointer;
  display: inline-block;
  width: 100px;
  height: 30px;
  margin-right: 10px;
  border: 2px solid #ddd;
  position: relative;
`;