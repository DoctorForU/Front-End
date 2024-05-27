//HospitalSearch.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { postHospitals } from '../../api/hospital';
import HospitalList from '../../components/hospitalList/HospitalList';
import { KakaoMap } from '../../components'; // 맞데
import KakaoMap2 from '../../components/kakaoMap/KakaoMap2';

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const primaryOptions = [
  { value: 'department', label: '진료과목' },
  { value: 'institute', label: '기관 선택' }
];

const departments = [
  { value: 'internal', label: '내과' },
  { value: 'surgery', label: '외과' },
  // 추가 진료과목 옵션
];

const institutes = [
  { value: 'hospital', label: '병원' },
  { value: 'general', label: '상급 병원' },
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

  useEffect(() => {
    // Fetch the city data from the JSON file
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

    console.log("Request data: ", data); // 요청 데이터 로그 출력

    try {
      const result = await postHospitals(data);
      console.log("Response data: ", result); // 응답 데이터 로그 출력
      setSearchResults(result || []); // 검색 결과 설정
    } catch (error) {
      console.error('Error:', error);
    }
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
      <KakaoMap data={searchResults} />
      {/* <KakaoMap2 />  */}
      <HospitalList results={searchResults} />
    </Container>
  );
};
