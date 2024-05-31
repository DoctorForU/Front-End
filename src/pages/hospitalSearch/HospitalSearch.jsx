import React, { useState, useEffect } from 'react';
import { postHospitals } from '../../api/hospital';
import HospitalList from '../../components/hospitalList/HospitalList';
import { KakaoMap } from '../../components';

import * as S from "./Header.styled";

const primaryOptions = [
  { value: 'department', label: '진료과목' },
  { value: 'institute', label: '기관선택' }
];

const departments = [
  { value: 'D001', label: '내과' },
  { value: 'D002', label: '소아청소년과' },
  { value: 'D003', label: '신경과' },
  { value: 'D004', label: '정신건강의학과' },
  { value: 'D005', label: '피부과' },
  { value: 'D006', label: '외과' },
  { value: 'D007', label: '흉부외과' },
  { value: 'D008', label: '정형외과' },
  { value: 'D009', label: '신경외과' },
  { value: 'D010', label: '성형외과' },
  { value: 'D011', label: '산부인과' },
  { value: 'D012', label: '안과' },
  { value: 'D013', label: '이비인후과' },
  { value: 'D014', label: '비뇨기과' },
  { value: 'D015', label: '결핵과' },
  { value: 'D016', label: '재활의학과' },
  { value: 'D017', label: '마취통증의학과' },
  { value: 'D018', label: '영상의학과' },
  { value: 'D019', label: '치료방사선과' },
  { value: 'D020', label: '임상병리과' },
  { value: 'D021', label: '해부병리과' },
  { value: 'D022', label: '가정의학과' },
  { value: 'D023', label: '핵의학과' },
  { value: 'D024', label: '응급의학과' },
  { value: 'D026', label: '치과' },
  { value: 'D037', label: '소아치과' },
  { value: 'D044', label: '한방내과' }


  // 추가 진료과목 옵션
];

const institutes = [
  { value: 'A', label: '종합병원' },
  { value: 'B', label: '병원' },
  { value: 'C', label: '의원' },
  { value: 'D', label: '요양병원' },
  { value: 'E', label: '한방병원' },
  { value: 'F', label: '노인전문병원' },
  { value: 'G', label: '한의원' },
  { value: 'M', label: '치과병원' },
  { value: 'R', label: '보건소' },
  { value: 'L', label: '정신병원' }


  // 추가 기관 옵션
];

export function HospitalSearch() {
  const [primaryOption, setPrimaryOption] = useState('');
  const [secondaryOptions, setSecondaryOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [districts, setDistricts] = useState([]);
  const [cityData, setCityData] = useState({});
  const [hospitalName, setHospitalName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch('/city_data.json')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.reduce((acc, {sido, sigungu}) => {
          if (!acc[sido]) acc[sido] = new Set();
          acc[sido].add(sigungu);
          return acc;
        }, {});
        for (let key in formattedData) {
          formattedData[key] = Array.from(formattedData[key]);
        }
        setCityData(formattedData);
      });
  }, []);

  const handlePrimaryOptionChange = (e) => {
    const value = e.target.value;
    setPrimaryOption(value);

    if (value === 'department') {
      setSecondaryOptions(departments);
    } else if (value === 'institute') {
      setSecondaryOptions(institutes);
    } else {
      setSecondaryOptions([]);
    }
  };

  const handleCityChange = (e) => {
    const value = e.target.value;
    setSelectedCity(value);
    setDistricts(cityData[value] || []);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = {
      primaryOption,
      secondaryOption: document.querySelectorAll('select')[1].value,
      selectedCity,
      selectedDistrict: document.querySelectorAll('select')[3].value,
      hospitalName
    };

    console.log("Request data: ", data);

    try {
      const result = await postHospitals(data);
      console.log("Response data: ", result);
      setSearchResults(result || []);
      setCurrentPage(1); // Reset to first page on new search
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = searchResults.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <Title>병원 찾기</Title>
      <Form>
        <Select value={primaryOption} onChange={handlePrimaryOptionChange}>
          <option value="">선택하세요</option>
          {primaryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <Select>
          <option value="">옵션을 선택하세요</option>
          {secondaryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <Select value={selectedCity} onChange={handleCityChange}>
          <option value="">시/도</option>
          {Object.keys(cityData).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </Select>
        <Select>
          <option value="">시/군/구</option>
          {districts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </Select>
        <Input
          type="text"
          placeholder="병원명을 입력해주세요."
          value={hospitalName}
          onChange={(e) => setHospitalName(e.target.value)}
        />
        <Button onClick={handleClick}>검색</Button>
      </Form>
      <KakaoMap data={currentItems} />
      <HospitalList results={currentItems} onPageChange={handlePageChange} totalPages={totalPages} currentPage={currentPage} />
    </Container>
  );
}
