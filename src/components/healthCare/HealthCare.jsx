import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceArea,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";
import * as S from "./HealthCare.styled";

const bloodPressureData = [
  { systolic: 120, diastolic: 80, createdAt: "1/4" },
  { systolic: 115, diastolic: 75, createdAt: "1/11" },
  { systolic: 130, diastolic: 85, createdAt: "1/18" },
  { systolic: 120, diastolic: 80, createdAt: "1/25" },
  { systolic: 130, diastolic: 85, createdAt: "2/1" },
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

  const displayTitle = title === "Blood Pressure" ? "혈압" : "체중";
  return (
    <S.Container>
      <S.Title>
        <span style={{ fontWeight: "bold" }}>{displayTitle}</span>
        <S.Value>{latestValue}</S.Value>
      </S.Title>
      <S.Content>
        {title === "Blood Pressure" ? (
          <>
            <LineChart
              width={350}
              height={200}
              data={data}
              margin={{ top: 10, right: 40, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <XAxis
                dataKey="createdAt"
                fontSize={12}
                tickMargin={10}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                fontSize={12}
                tickMargin={10}
                axisLine={false}
                tickLine={false}
                domain={[50, 175]}
                tickCount={5}
                interval="preserveStartEnd"
              />
              <ReferenceArea y1={150} y2={175} fill="pink" fillOpacity={0.3} />
              <ReferenceArea y1={50} y2={80} fill="pink" fillOpacity={0.3} />
              <Line type="monotone" dataKey="systolic" stroke="#FF3B51" />
              <Line type="monotone" dataKey="diastolic" stroke="#5FA1D3" />
            </LineChart>
          </>
        ) : (
          <>
            <AreaChart
              width={350}
              height={200}
              data={data}
              margin={{ top: 10, right: 40, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <XAxis
                dataKey="createdAt"
                fontSize={12}
                tickMargin={10}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                fontSize={12}
                tickMargin={10}
                axisLine={false}
                tickLine={false}
                domain={[latestValue, "auto"]}
                tickCount={5}
                interval="preserveStartEnd"
              />
              <Area
                type="monotone"
                dataKey="weight"
                stroke="#6640FF"
                fill="#b4a6f1"
              />
            </AreaChart>
          </>
        )}
      </S.Content>
    </S.Container>
  );
}
