import React from 'react';
import styled from 'styled-components';
import {handleViewDetails} from '../../api/hospitalDetail';

const ListContainer = styled.div`
  margin-top: 20px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Info = styled.div`
  flex: 1;
  padding-left: 20px;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Placeholder = styled.div`
  width: 50px; /* 필요에 따라 조정 가능 */
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  padding: 8px 12px;
  margin: 0 5px;
  font-size: 14px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;


const HospitalList = ({ results = [], onPageChange, totalPages, currentPage }) => {
  //const itemsPerPage = 10;
  const maxPageButtons = 7;

  const generatePageNumbers = () => {
    const pages = [];
    const half = Math.floor(maxPageButtons / 2);
    let startPage = currentPage - half;
    let endPage = currentPage + half;

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(totalPages, maxPageButtons);
    } else if (endPage > totalPages) {
      startPage = Math.max(1, totalPages - maxPageButtons + 1);
      endPage = totalPages;
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  const handleNavigateClick = (hospital) => {
    const url = `https://map.kakao.com/link/to/${encodeURIComponent(hospital.dutyName)},${hospital.wgs84Lat},${hospital.wgs84Lon}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <ListContainer>
        {results.length > 0 ? (
          results.map((result, index) => (
            <ListItem key={index}>
              <Placeholder />
              <Info>
                <p><strong>병원명:</strong> {result.dutyName}</p>
                <p><strong>주소:</strong> {result.dutyAddr}</p>
                <p><strong>전화번호:</strong> {result.dutyTel1}</p>
                <p><strong>진료 시간:</strong> {result.dutyTime1s} - {result.dutyTime1c}</p>
              </Info>
              <Actions>
                <Button onClick={() => handleNavigateClick(result)}>길찾기</Button>
                <Button onClick={()=> handleViewDetails(result.hpid)}>상세보기</Button>
                <Button>응급진료확인하기</Button>
                <Button>관심병원</Button>
              </Actions>
            </ListItem>
          ))
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </ListContainer>
      <PaginationContainer>
        <PageButton
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          이전
        </PageButton>
        {pageNumbers.map((number) => (
          <PageButton
            key={number}
            onClick={() => onPageChange(number)}
            disabled={currentPage === number}
          >
            {number}
          </PageButton>
        ))}
        <PageButton
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          다음
        </PageButton>
      </PaginationContainer>
    </>
  );
};

export default HospitalList;
