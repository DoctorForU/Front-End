import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import * as S from "./HealthCare.styled";

const bloodPressureData = [
  { systolic: 120, diastolic: 80, createdAt: "1/4" },
  { systolic: 115, diastolic: 75, createdAt: "1/11" },
  { systolic: 130, diastolic: 85, createdAt: "1/18" },
];

const weightData = [
  { weight: 70, createdAt: "1/4" },
  { weight: 69, createdAt: "1/11" },
  { weight: 71, createdAt: "1/18" },
];

export function HealthCare({ title }) {
  const data = title === "Blood Pressure" ? bloodPressureData : weightData;
  const unit = title === "Blood Pressure" ? "mmHg" : "kg";
  const latestData = data[data.length - 1];

  const latestValue =
    title === "Blood Pressure"
      ? `${latestData.systolic}/${latestData.diastolic} ${unit}`
      : `${latestData.weight} ${unit}`;

  return (
    <S.Container>
      <S.Title>
        <span>{title}</span>
        <S.Value>{latestValue}</S.Value>
      </S.Title>
      <LineChart width={350} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="createdAt" />
        <YAxis />
        <Tooltip />
        {title === "Blood Pressure" ? (
          <>
            <Line type="monotone" dataKey="systolic" stroke="#8884d8" />
            <Line type="monotone" dataKey="diastolic" stroke="#82ca9d" />
          </>
        ) : (
          <Line type="monotone" dataKey="weight" stroke="#8884d8" />
        )}
      </LineChart>
    </S.Container>
  );
}
