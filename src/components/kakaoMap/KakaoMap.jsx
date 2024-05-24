import { useState } from "react";

const { kakao } = window;

export function KakaoMap(data) {
  const [location, setLocation] = useState({
    x: data.center.x,
    y: data.center.y,
  });

  const map = () => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(location.y, location.x),
      level: 5, //지도 확대, 축소 정도
    };

    data.forEach((hospital) => {
      // 주소-좌표 변환 객체
      const geocoder = new kakao.maps.services.Geocoder();
      geocoder.addressSearch(hospital.address, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });
          var infowindow = new kakao.maps.InfoWindow({
            content:
              '<div style="width:150px;text-align:center;padding:6px 0;">' +
              hospital.name +
              "</div>",
          });
          // kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
          // kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
        }
      });
    });
  };

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
}