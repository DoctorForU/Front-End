import React, { useEffect } from 'react';

const KakaoMap = () => {
  useEffect(() => {
    const { kakao } = window;
    if (!kakao || !kakao.maps) {
      console.error("Kakao Maps API를 로드할 수 없습니다.");
      return;
    }

    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.5642135, 127.0016985), // 서울 중구의 위도와 경도
      level: 3, // 지도의 확대 레벨
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(37.5642135, 127.0016985); 
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}></div>
  );
};

export default KakaoMap;
