export enum UnitType {
  Repetitions = "Επαναλήψεις",
  Time = "Χρόνος",
  ToFailure = "Μέχρι Εξαντλήσεως",
}

export interface Unit {
  id: number;
  name: UnitType;
}

export function getUnitId(name: UnitType): number {
  return UNITS.find((unit) => unit.name === name)!.id;
}

export const UNITS = [
  { id: 1, name: UnitType.Repetitions },
  { id: 2, name: UnitType.Time },
  { id: 3, name: UnitType.ToFailure },
];
