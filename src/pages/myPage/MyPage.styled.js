import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 9px;
  width: 15%;
  height: 100%;
  background-color: #435cc8;
  color: white;
`;

export const SidebarItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  width: 13em;
  padding: 0 20px;
  border-radius: 5px;
  background-color: #251650;
  cursor: pointer;
  &:hover {
    color: #3498db;
  }
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 85%;
  padding: 30px;
  background-color: #ecf0f1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 30px;
`;

export const CardTitle = styled.div`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

export const CardValue = styled.div`
  font-size: 2em;
  margin-bottom: 10px;
`;

export const CardChart = styled.div`
  height: 100px;
  background-color: #f2f3f4;
  border-radius: 5px;
`;
