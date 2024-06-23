import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Section = styled.section`
  width: 85%;
  margin: 20px 0;
  padding: 20px;
`;

export const HospitalInfo = styled.div`
  text-align: left;
  padding: 10px 20px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .hospital-type {
    font-size: 1rem;
    color: #666;
  }

  p {
    margin: 5px 0;
  }
`;

export const TabNav = styled.nav`
  display: flex;
  justify-content: left;
  align-items: flex-end;
  height: 80px;
  width: 85%;
  margin-bottom: 20px;

  button {
    padding: 10px 20px;
    margin: 0 5px;
    height: 40px;
    border: none;
    background-color: white;
    font-size: 16px;

    cursor: pointer;

    &.active {
      color: #435cc8;
      font-weight: bold;
    }
  }
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const Line = styled.div`
  border: 1px solid #eef0f3;
  width: 85%;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Card = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: calc(33.333% - 16px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  h4 {
    margin-top: 0;
  }
  p {
    margin: 0;
  }
`;
