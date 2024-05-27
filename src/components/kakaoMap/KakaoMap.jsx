import React, { useEffect, useState } from "react";

const { kakao } = window;

export function KakaoMap({ data }) {
  const [location, setLocation] = useState({
    x: data.length > 0 ? data[0].wgs84Lon : 127.027621,
    y: data.length > 0 ? data[0].wgs84Lat : 37.497942,
  });

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(location.y, location.x),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);

    data.forEach((hospital) => {
      const coords = new kakao.maps.LatLng(hospital.wgs84Lat, hospital.wgs84Lon);
      const marker = new kakao.maps.Marker({
        map: map,
        position: coords,
      });
      const infowindow = new kakao.maps.InfoWindow({
        content: `<div style="width:150px;text-align:center;padding:6px 0;">${hospital.dutyName}</div>`,
      });
      kakao.maps.event.addListener(marker, 'mouseover', () => infowindow.open(map, marker));
      kakao.maps.event.addListener(marker, 'mouseout', () => infowindow.close());
    });
  }, [data, location]);

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
}
