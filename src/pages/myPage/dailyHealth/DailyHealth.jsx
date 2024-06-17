import { useState } from "react";
import { HealthList } from "../../../components";

import * as S from "./DailyHealth.styled";

export function DailyHealth() {
  const [exerciseList, setExerciseList] = useState([
    {
      exerciseName: "",
      exerciseSet: 0,
      exerciseWeight: 0,
      exerciseCount: 0,
    },
  ]);

  const handleExerciseList = (exerciseName, isChecked) => {
    if (isChecked) {
      setExerciseList([
        ...exerciseList,
        {
          exerciseName,
          exerciseSet: 0,
          exerciseWeight: 0,
          exerciseCount: 0,
          status: false,
        },
      ]);
    } else {
      setExerciseList(
        exerciseList.filter((item) => item.exerciseName !== exerciseName)
      );
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedList = [...exerciseList];
    updatedList[index][field] = value;
    setExerciseList(updatedList);
  };

  return (
    <S.Container>
      <HealthList
        exerciseList={exerciseList}
        setExerciseList={setExerciseList}
        onExerciseChange={handleExerciseList}
      />
      <S.Content>
        {exerciseList.map((exercise, index) => (
          <S.Card key={index}>
            <S.Table>
              <thead>
                <S.TableRow>
                  <S.TableHeader
                    style={{
                      width: "55%",
                      textAlign: "left",
                      marginLeft: "40px",
                    }}
                  >
                    운동
                  </S.TableHeader>
                  <S.TableHeader>세트</S.TableHeader>
                  <S.TableHeader>kg</S.TableHeader>
                  <S.TableHeader>회</S.TableHeader>
                  <S.TableHeader>완료</S.TableHeader>
                </S.TableRow>
              </thead>
              <tbody>
                <S.TableRow>
                  <S.TableCell
                    style={{ textAlign: "left", marginLeft: "40px" }}
                  >
                    {exercise.name}
                  </S.TableCell>
                  <S.TableCell>
                    <S.Input
                      type="number"
                      value={exercise.set}
                      onChange={(e) =>
                        handleInputChange(index, "exerciseSet", e.target.value)
                      }
                    />
                  </S.TableCell>
                  <S.TableCell>
                    <S.Input
                      type="number"
                      value={exercise.weight}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          "exerciseWeight",
                          e.target.value
                        )
                      }
                    />
                  </S.TableCell>
                  <S.TableCell>
                    <S.Input
                      type="number"
                      value={exercise.count}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          "exerciseCount",
                          e.target.value
                        )
                      }
                    />
                  </S.TableCell>
                  <S.TableCell>
                    <S.CheckBox
                      type="checkbox"
                      checked={exercise.status}
                      onChange={(e) =>
                        handleInputChange(index, "status", e.target.checked)
                      }
                    />
                  </S.TableCell>
                </S.TableRow>
              </tbody>
            </S.Table>
          </S.Card>
        ))}
      </S.Content>
    </S.Container>
  );
}
