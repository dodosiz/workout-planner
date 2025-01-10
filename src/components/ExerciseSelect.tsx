import { Grid2 as Grid } from "@mui/material";
import { useState } from "react";
import {
  CATEGORIES,
  getCategoryId,
  REST_CATEGORY_ID,
} from "../data/categories";
import { MultiSelect } from "./Multiselect";
import { EXERCISES, STANDARD_UNITS } from "../data/excercises/all";
import { getUnitId } from "../data/units";

interface ExerciseSelectProps {
  id: number;
}

export function ExerciseSelect(props: ExerciseSelectProps) {
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [exerciseId, setExerciseId] = useState<number | null>(null);
  const [unitId, setUnitId] = useState<number | null>(null);
  const handleCategoryChange = (id: number | string) => {
    setCategoryId(id as number);
    setExerciseId(null);
    setUnitId(null);
  };
  const handleExerciseChange = (id: number | string) => {
    setExerciseId(id as number);
    setUnitId(null);
  };
  const handleUnitChange = (id: number | string) => {
    setUnitId(id as number);
  };
  const getCategories = () => {
    return CATEGORIES.map((category) => ({
      value: category.id,
      label: category.name,
    }));
  };
  const getExercises = () => {
    return EXERCISES.filter(
      (exercise) => getCategoryId(exercise.category) === categoryId
    ).map((exercise) => ({
      value: exercise.id,
      label: exercise.name,
    }));
  };
  const getUnits = () => {
    const exercise = EXERCISES.find((exercise) => exercise.id === exerciseId);
    const units = exercise && exercise.units ? exercise.units : STANDARD_UNITS;
    return units.map((unitType) => ({
      value: getUnitId(unitType),
      label: unitType,
    }));
  };
  return (
    <Grid container spacing={2} marginTop={"10px"}>
      <Grid size={{ xs: 1, md: 3 }}>
        <MultiSelect
          id={`category-${props.id}`}
          label="Κατηγορία"
          value={categoryId}
          items={getCategories()}
          onChange={handleCategoryChange}
        />
      </Grid>
      {categoryId !== REST_CATEGORY_ID && (
        <Grid size={{ xs: 1, md: 3 }}>
          <MultiSelect
            id={`exercise-${props.id}`}
            label="Άσκηση"
            disabled={categoryId === null}
            value={exerciseId}
            items={getExercises()}
            onChange={handleExerciseChange}
          />
        </Grid>
      )}
      {categoryId !== REST_CATEGORY_ID && (
        <Grid size={{ xs: 1, md: 3 }}>
          <MultiSelect
            id={`unit-${props.id}`}
            label="Είδος"
            disabled={exerciseId === null}
            value={unitId}
            items={getUnits()}
            onChange={handleUnitChange}
          />
        </Grid>
      )}
    </Grid>
  );
}
