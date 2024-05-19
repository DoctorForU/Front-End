export const getHospital = (hospital) => {
  return hospital.map(({ id, name, address, phone, specialty, rating }) => {
    return {
      id: id,
      name: name,
      address: address,
      phone: phone ? phone : "",
      speciality: specialty ? specialty : "",
      rating: rating,
    };
  }); // 데이터 정제
};
