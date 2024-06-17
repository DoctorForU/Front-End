import { useEffect, useState } from "react";
import { getSearchExerciseData } from "../../api";

import * as S from "./HealthList.styled";

const exampleData = [
  { id: 1, name: "바벨 백스쿼트", icon: "/health/바벨 백스쿼트.png" },
  { id: 2, name: "프론트 스쿼트", icon: "/health/프론트 스쿼트.png" },
  { id: 3, name: "덤벨 스플릿 스쿼트", icon: "/health/덤벨 스플릿 스쿼트.png" },
  {
    id: 4,
    name: "바벨 불가리안 스플릿 스쿼트",
    icon: "/health/바벨 불가리안 스플릿 스쿼트.png",
  },
  {
    id: 5,
    name: "루마니안 데드리프트",
    icon: "/health/루마니안 데드리프트.png",
  },
  {
    id: 6,
    name: "스모 데드리프트",
    icon: "/health/스모 데드리프트.png",
  },
  {
    id: 7,
    name: "컨벤셔널 데드리프트",
    icon: "/health/컨벤셔널 데드리프트.png",
  },
  {
    id: 8,
    name: "루마니안 데드리프트",
    icon: "/health/루마니안 데드리프트.png",
  },
  {
    id: 9,
    name: "레그 프레스",
    icon: "/health/레그 프레스.png",
  },
];

export function HealthList({
  exerciseList,
  setExerciseList,
  onExerciseChange,
}) {
  const [data, setData] = useState([]);
  const [exerciseName, setExerciseName] = useState("");

  useEffect(() => {
    handleExerciseData();
  });

  const handleExerciseList = (exercise) => {
    const existingExercise = exerciseList.find(
      (item) => item.exerciseName === exercise.name
    );
    if (existingExercise) {
      setExerciseList(
        exerciseList.filter((item) => item.exerciseName !== exercise.name)
      );
    } else {
      setExerciseList([
        ...exerciseList,
        {
          name: exercise.name,
          set: 0,
          weight: 0,
          count: 0,
          status: false,
        },
      ]);
    }
  };

  const handleExerciseData = async () => {
    const res = await getSearchExerciseData();
    console.log(res);
    if (res) setData(res);
    else setData(exampleData);
  };

  const handleSearchExerciseData = async () => {
    console.log(exerciseName);
    const res = await getSearchExerciseData(exerciseName);
    if (res) setData(res);
    else alert("일치하는 운동이 없습니다.");
  };

  return (
    <S.Container>
      <h1 style={{ marginLeft: " 10px" }}> Daily Health</h1>
      <S.SearchContainer>
        <S.InputBox>
          <S.Img
            src="/img/Icon09.png"
            alt="Icon09"
            style={{ width: "35px", height: "35px" }}
          />
          <S.Line></S.Line>
          <S.Input
            placeholder="찾으시는 운동을 검색해주세요."
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
          />
        </S.InputBox>
        <S.Button onClick={handleSearchExerciseData}>
          <S.Img
            src="/img/Icon08.png"
            alt="Icon08"
            style={{ width: "35px", height: "35px", marginLeft: "15px" }}
          />
        </S.Button>
      </S.SearchContainer>
      <S.ExerciseList>
        {data.map((exercise, index) => (
          <S.ExerciseListItem key={index}>
            <S.CheckBox
              key={exercise.id}
              type="checkbox"
              checked={exerciseList.some(
                (item) => item.exerciseName === exercise.name
              )}
              onChange={(e) =>
                onExerciseChange(exercise.name, e.target.checked)
              }
            />
            <S.Img src={exercise.icon} alt={exercise.name} />
            <S.ExerciseName>{exercise.name}</S.ExerciseName>
          </S.ExerciseListItem>
        ))}
      </S.ExerciseList>
    </S.Container>
  );
}
