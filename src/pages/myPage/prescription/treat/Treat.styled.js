import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 250px);
  overflow: hidden;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  height: 11em;
  width: 100%;
  background: #f4f6f9;
`;

export const Table = styled.table`
  width: 90%;
  border-collapse: collapse;
  margin: 40px;
`;

export const TableHeader = styled.th`
  height: 40px;
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
  text-align: center;
`;

export const TableRow = styled.tr`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const TableCell = styled.td`
  height: 30px;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

export const EmptyMessage = styled.div`
  text-align: center;
  margin: 20px 0;
  color: #888;
`;
