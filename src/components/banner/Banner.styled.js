import styled from "styled-components";

export const Container = styled.div`
  /* background-color: #251650; */
  width: 100%;
  height: 230px;
  padding: 10px 0;
  border-radius: 10px;
  margin-right: 20px;
`;

export const Img = styled.img`
  width: 63.5em;
  height: 15em;
  margin-right: 10px;
`;

export const Title = styled.h2`
  padding-left: 20px;
  font-size: 20px;
`;

export const CardGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  background-color: white;
  padding: 15px;
  margin: 0 10px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  flex: 1;

  &:first-child {
    margin-right: 10px;
  }

  &:last-child {
    margin-left: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HospitalName = styled.h3`
  font-weight: bold;
`;

export const HospitalAddr = styled.p`
  font-size: 14px;
  margin: 0 0 5px;
`;

export const HospitalTel = styled.p`
  font-size: 14px;
  margin: 0;
`;
