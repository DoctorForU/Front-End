// KakaoMap.jsx
import { useState, useEffect } from "react"; // useState와 useEffect를 React로부터 가져옵니다.

const { kakao } = window; // window 객체에서 kakao를 가져옵니다.

export function KakaoMap(data) { // KakaoMap 컴포넌트를 정의합니다.
  // location 상태를 초기화합니다. 중심 좌표를 data.center에서 가져옵니다.
  const [location, setLocation] = useState({
    x: data.center.x,
    y: data.center.y,
  });

  // 지도 설정 함수
  const map = () => {
    // 지도를 표시할 컨테이너를 가져옵니다.
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(location.y, location.x), // 중심 좌표 설정
      level: 5, // 지도 확대, 축소 정도 설정
    };

    // 각 병원의 정보를 통해 마커와 인포윈도우를 생성합니다.
    data.forEach((hospital) => {
      // 주소-좌표 변환 객체 생성
      const geocoder = new kakao.maps.services.Geocoder();
      // 병원의 주소를 좌표로 변환합니다.
      geocoder.addressSearch(hospital.address, function (result, status) {
        if (status === kakao.maps.services.Status.OK) { // 변환에 성공했을 때
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x); // 좌표 생성
          var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: coords, // 마커의 위치
          });
          var infowindow = new kakao.maps.InfoWindow({
            content:
              '<div style="width:150px;text-align:center;padding:6px 0;">' +
              hospital.name +
              "</div>", // 인포윈도우에 표시될 내용
          });
          // 마커에 마우스 오버 이벤트 리스너 추가 (현재 주석 처리됨)
          // kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
          // 마커에 마우스 아웃 이벤트 리스너 추가 (현재 주석 처리됨)
          // kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
        }
      });
    });
  };

  // 컴포넌트가 렌더링될 때 지도를 생성합니다.
  useEffect(() => {
    map();
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "500px" }}></div> {/* 지도를 표시할 div */}
    </div>
  );
}
