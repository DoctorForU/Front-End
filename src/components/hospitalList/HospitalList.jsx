import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  margin-top: 20px;
`;

const ListItem = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const HospitalList = ({ results = [] }) => {
  return (
    <ListContainer>
      {results.length > 0 ? (
        results.map((result, index) => (
          <ListItem key={index}>
            <p><strong>병원명:</strong> {result.dutyName}</p>
            <p><strong>주소:</strong> {result.dutyAddr}</p>
            <p><strong>전화번호:</strong> {result.dutyTel1}</p>
            <p><strong>진료 시간:</strong> {result.dutyTime1s} - {result.dutyTime1c}</p>
          </ListItem>
        ))
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </ListContainer>
  );
};

export default HospitalList;
