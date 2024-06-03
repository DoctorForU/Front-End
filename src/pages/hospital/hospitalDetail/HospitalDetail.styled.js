import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Section = styled.section`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

export const HospitalInfo = styled.div`
  text-align: center;

  h2 {
    font-size: 2rem;
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

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f9f9f9;
  }

  td {
    text-align: center;
  }
`;

export const TabNav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  button {
    padding: 10px 20px;
    margin: 0 5px;
    border: none;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: background-color 0.3s;

    &.active {
      background-color: #ddd;
    }
  }
`;
