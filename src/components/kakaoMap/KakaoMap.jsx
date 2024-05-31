import React, { useEffect, useState } from "react";

const { kakao } = window;

export function KakaoMap({ data }) {
  const [location, setLocation] = useState({
    x: data.length > 0 ? data[0].wgs84Lon : 127.027621,
    y: data.length > 0 ? data[0].wgs84Lat : 37.497942,
  });

  useEffect(() => {
    if (data.length > 0) {
      setLocation({
        x: data[0].wgs84Lon,
        y: data[0].wgs84Lat,
      });
    }
  }, [data]);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(location.y, location.x),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);

    const labels = ["A", "B", "C", "D", "E", "F"];
    data.forEach((hospital, index) => {
      const coords = new kakao.maps.LatLng(hospital.wgs84Lat, hospital.wgs84Lon);
      const marker = new kakao.maps.Marker({
        map: map,
        position: coords,
        title: labels[index % labels.length], // 마커의 타이틀을 알파벳으로 설정
      });

      const infowindow = new kakao.maps.InfoWindow({
        content: `<div style="width:50px;height:50px;display:flex;align-items:center;justify-content:center;border-radius:50%;background-color:blue;color:white;font-size:16px;">${labels[index % labels.length]}</div>`,
      });

      infowindow.open(map, marker);
    });
  }, [data, location]);

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
}
