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
