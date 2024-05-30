import styled from "styled-components";

export const Sidebar = styled.div`
  width: 20%;
  background-color: #2c3e50;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const SidebarItem = styled.div`
  margin: 20px 0;
  cursor: pointer;
  &:hover {
    color: #3498db;
  }
`;

export const MainContent = styled.div`
  width: 80%;
  padding: 20px;
  background-color: #ecf0f1;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Card = styled.div`
  background-color: white;
  padding: 20px;
  width: 48%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
