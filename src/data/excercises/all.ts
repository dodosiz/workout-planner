import { CategoryType } from "../categories";
import { BACK_EXCERCISES } from "./back";
import { CHEST_EXERCISES } from "./chest";
import { UnitType } from "../units";
import { LEG_EXCERCISES } from "./legs";

export interface Excercise {
  id: number;
  name: string;
  category: CategoryType;
  units?: UnitType[];
}

export const STANDARD_UNITS = [
  UnitType.Repetitions,
  UnitType.Time,
  UnitType.ToFailure,
];

export const EXERCISES: Excercise[] = [
  ...CHEST_EXERCISES,
  ...BACK_EXCERCISES,
  ...LEG_EXCERCISES,
];
