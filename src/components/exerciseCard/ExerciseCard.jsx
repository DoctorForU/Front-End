import * as S from "./Exercise.Styled";

export function ExerciseCard({
  exerciseList,
  handleInputChange,
  handleTimeChange,
}) {
  return (
    <>
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
                <S.TableHeader>시 / 분</S.TableHeader>
                <S.TableHeader>완료</S.TableHeader>
              </S.TableRow>
            </thead>
            <tbody>
              <S.TableRow>
                <S.TableCell style={{ textAlign: "left", marginLeft: "40px" }}>
                  {exercise.exerciseName}
                </S.TableCell>
                <S.TableCell>
                  <S.Input
                    type="number"
                    value={exercise.exerciseSets}
                    onChange={(e) =>
                      handleInputChange(index, "exerciseSets", e.target.value)
                    }
                  />
                </S.TableCell>
                <S.TableCell>
                  <S.Input
                    type="number"
                    value={exercise.exerciseWeight}
                    onChange={(e) =>
                      handleInputChange(index, "exerciseWeight", e.target.value)
                    }
                  />
                </S.TableCell>
                <S.TableCell>
                  <S.Input
                    type="number"
                    value={exercise.exerciseCount}
                    onChange={(e) =>
                      handleInputChange(index, "exerciseCount", e.target.value)
                    }
                  />
                </S.TableCell>
                <S.TableCell style={{ flexDirection: "row", width: "28%" }}>
                  <S.Input
                    style={{ width: "25px" }}
                    type="number"
                    //value={exercise.exerciseDuration.split(":")[0] || "00"}
                    value={
                      exercise.exerciseDuration
                        ? exercise.exerciseDuration.split(":")[0]
                        : "00"
                    }
                    onChange={(e) => handleTimeChange(index, 0, e.target.value)}
                  />
                  <span style={{ margin: "0 10px" }}>:</span>
                  <S.Input
                    style={{ width: "50px" }}
                    type="number"
                    //value={exercise.exerciseDuration.split(":")[1] || "00"}
                    value={
                      exercise.exerciseDuration
                        ? exercise.exerciseDuration.split(":")[1]
                        : "00"
                    }
                    onChange={(e) => handleTimeChange(index, 1, e.target.value)}
                  />
                </S.TableCell>
                <S.TableCell>
                  <S.CheckBox
                    type="checkbox"
                    checked={exercise.isCompleted}
                    onChange={(e) =>
                      handleInputChange(index, "isCompleted", e.target.checked)
                    }
                  />
                </S.TableCell>
              </S.TableRow>
            </tbody>
          </S.Table>
        </S.Card>
      ))}
    </>
  );
}
