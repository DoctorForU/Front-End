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
import { useState, useEffect } from "react";
import * as S from "./HealthCare.styled";
import { Modal } from "./Modal";
import { getHealthData } from "../../api";
import { transformHealthData } from "../../services";

const exampleData = [
  { systolic: 120, diastolic: 80, weight: 30, createdAt: "1/4" },
  { systolic: 115, diastolic: 75, weight: 40, createdAt: "1/11" },
  { systolic: 130, diastolic: 85, weight: 50, createdAt: "1/18" },
  { systolic: 120, diastolic: 80, weight: 45, createdAt: "1/25" },
  { systolic: 130, diastolic: 85, weight: 70, createdAt: "2/1" },
];

export function HealthCare() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    systolic: 0,
    diastolic: 0,
    weight: 0,
  });

  const [data, setData] = useState([]);
  const latestBloodPressure = data.length
    ? `${data[data.length - 1].systolic}/${data[data.length - 1].diastolic}`
    : "0";
  const latestWeight = data.length ? data[data.length - 1].weight : "0";

  useEffect(() => {
    handleHealthData();
  }, []);

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  };

  const closeModal = (e) => {
    document.body.style.overflow = "unset";
    setForm({
      systolic: "",
      diastolic: "",
      weight: "",
    });
    setIsOpen(false);
  };

  const handleHealthData = async () => {
    const res = await getHealthData();
    if (res) {
      const transformedData = transformHealthData(res);
      setData(transformedData);
    } else setData(exampleData);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        form={form}
        setForm={setForm}
      />
      <S.Container onClick={openModal}>
        <S.Chart>
          <S.Title>
            <span style={{ fontWeight: "bold" }}>Blood Pressure</span>
            <S.Value>{latestBloodPressure}mmHg</S.Value>
          </S.Title>
          <S.Content>
            <LineChart
              width={350}
              height={200}
              data={data ? data : [{}]}
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
                tickCount={6}
                interval="preserveStartEnd"
              />
              <ReferenceArea y1={150} y2={175} fill="pink" fillOpacity={0.3} />
              <ReferenceArea y1={50} y2={80} fill="pink" fillOpacity={0.3} />
              <Line type="monotone" dataKey="systolic" stroke="#FF3B51" />
              <Line type="monotone" dataKey="diastolic" stroke="#5FA1D3" />
            </LineChart>
          </S.Content>
        </S.Chart>
        <S.Chart>
          <S.Title>
            <span style={{ fontWeight: "bold" }}>Weight</span>
            <S.Value>{latestWeight}kg</S.Value>
          </S.Title>
          <S.Content>
            <AreaChart
              width={350}
              height={200}
              data={data.length ? data : [{}]}
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
                domain={[0, 100]}
                tickCount={5}
                interval="preserveStartEnd"
              />
              <ReferenceArea
                y1={0}
                y2={50}
                fill="#b4a6f1"
                fillOpacity={data.length ? 0 : 0.3}
              />
              <Area
                type="monotone"
                dataKey="weight"
                stroke="#6640FF"
                fill="#b4a6f1"
              />
            </AreaChart>
          </S.Content>
        </S.Chart>
      </S.Container>
    </>
  );
}
