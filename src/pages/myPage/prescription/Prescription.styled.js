import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 250px);
  height: 100%;
  overflow: hidden;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  height: 11em;
  width: 100%;
  background: #f4f6f9;
`;

export const InfoTitle = styled.span`
  color: #2276d2;
  font-size: 18px;
  font-weight: bolder;
`;

export const InfoBox = styled.div`
  width: 75%;
  padding: 20px;
  margin: 40px;
  font-size: 16px;
  border: 1px dashed #aaaaaa;
`;

export const InfoList = styled.ul`
  list-style: none; // 기본 불릿 제거
  padding-left: 1em;

  li {
    position: relative;
    padding-left: 1em;

    &::before {
      content: "•"; // 불릿 문자
      position: absolute;
      left: 0;
      font-size: 1em; // 불릿 크기
      line-height: 1.5;
    }
  }
`;

export const Content = styled.div`
  border: 1px solid #ddd;
  width: 77%;
`;

export const SearchTitle = styled.div`
  border-bottom: 1px solid #ddd;
  background-color: #f4f6f9;
  padding: 20px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  gap: 40px;
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

export const FormLabel = styled.label`
  display: block;
  font-weight: bold;
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 0.5em;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const FormInput = styled.input`
  border: none;
  outline: none;
  width: 150px;
  padding: 0.5em;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  padding: 0.5em 1em;
  margin-left: 10px;
  background-color: #435cc8;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const Table = styled.table`
  width: 95%;
  margin: 30px;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  height: 40px;
  border: 1px solid #ddd;
  border-top: 1px solid gray;
  background-color: #f7f8fa;
  padding: 8px;
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

export const Line = styled.div`
  border: 1px solid #eef0f3;
  width: 100%;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  border: none;
  width: 25%;
  height: 40px;
  margin: 4em;
  color: white;
  background-color: #435cc8;
`;
