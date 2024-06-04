import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 280px;
  width: 100%;
  padding: 10px;
  margin-top: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  padding: 10px;
  margin: 10px;
`;

export const Value = styled.span`
  font-size: 0.8em;
  font-weight: 15px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
