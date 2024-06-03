import React from "react";
import { getHospitalDetail } from "../../api";
import * as S from "./HospitalList.styled";
import { useNavigate } from "react-router-dom";

const HospitalList = ({
  results = [],
  onPageChange,
  totalPages,
  currentPage,
}) => {
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
  const navigate = useNavigate();

  const handleNavigateClick = (hospital) => {
    const url = `https://map.kakao.com/link/to/${encodeURIComponent(
      hospital.dutyName
    )},${hospital.wgs84Lat},${hospital.wgs84Lon}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <S.ListContainer>
        {results.length > 0 ? (
          results.map((result, index) => (
            <S.ListItem key={index}>
              <S.Placeholder />
              <S.Info>
                <p>
                  <strong>병원명:</strong> {result.dutyName}
                </p>
                <p>
                  <strong>주소:</strong> {result.dutyAddr}
                </p>
                <p>
                  <strong>전화번호:</strong> {result.dutyTel1}
                </p>
                <p>
                  <strong>진료 시간:</strong> {result.dutyTime1s} -{" "}
                  {result.dutyTime1c}
                </p>
              </S.Info>
              <S.Actions>
                <S.Button onClick={() => handleNavigateClick(result)}>
                  길찾기
                </S.Button>
                <S.Button
                  onClick={() => {
                    navigate(`/hospital-search/${result.hpid}`);
                  }}
                >
                  상세보기
                </S.Button>
                <S.Button>응급진료확인하기</S.Button>
                <S.Button>관심병원</S.Button>
              </S.Actions>
            </S.ListItem>
          ))
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </S.ListContainer>
      <S.PaginationContainer>
        <S.PageButton
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          이전
        </S.PageButton>
        {pageNumbers.map((number) => (
          <S.PageButton
            key={number}
            onClick={() => onPageChange(number)}
            disabled={currentPage === number}
          >
            {number}
          </S.PageButton>
        ))}
        <S.PageButton
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          다음
        </S.PageButton>
      </S.PaginationContainer>
    </>
  );
};

export default HospitalList;
