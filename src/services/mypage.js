export const transformHealthData = (data) => {
  const bloodPressureData = data.map((item) => ({
    systolic: item.systolic,
    diastolic: item.diastolic,
    createdAt: new Date(item.createAt).toLocaleDateString(),
  }));

  const weightData = data.map((item) => ({
    weight: item.weight,
    createdAt: new Date(item.createAt).toLocaleDateString(),
  }));

  return { bloodPressureData, weightData };
};
