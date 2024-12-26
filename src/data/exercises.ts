import { CategoryType } from "./categories";
import { UnitType } from "./units";

interface Excercise {
  id: number;
  name: string;
  category: CategoryType;
  units: UnitType[];
}

const standardUnits = [UnitType.Repetitions, UnitType.Time, UnitType.ToFailure];

export const EXERCISES: Excercise[] = [
  {
    id: 1,
    name: "Πιέσεις με μπάρα",
    category: CategoryType.Chest,
    units: standardUnits,
  },
  {
    id: 2,
    name: "Πιέσεις με μπάρα επικλινή",
    category: CategoryType.Chest,
    units: standardUnits,
  },
  {
    id: 3,
    name: "Πιέσεις με αλτήρες",
    category: CategoryType.Chest,
    units: standardUnits,
  },
  {
    id: 4,
    name: "Πιέσεις με αλτήρες επικλινή",
    category: CategoryType.Chest,
    units: standardUnits,
  },
  {
    id: 5,
    name: "Πιέσεις με μπάρα αρνητική κλίση",
    category: CategoryType.Chest,
    units: standardUnits,
  },
  {
    id: 6,
    name: "Πιέσεις με αλτήρες αρνητική κλίση",
    category: CategoryType.Chest,
    units: standardUnits,
  },
  {
    id: 7,
    name: "Πιέσεις στο μηχάνημα",
    category: CategoryType.Chest,
    units: standardUnits,
  },
  {
    id: 8,
    name: "Ανοίγματα με αλτήρες",
    category: CategoryType.Chest,
    units: standardUnits,
  },
  {
    id: 9,
    name: "Ανοίγματα στο μηχάνημα",
    category: CategoryType.Chest,
    units: standardUnits,
  },
  {
    id: 10,
    name: "Ανοίγματα με καλώδια",
    category: CategoryType.Chest,
    units: standardUnits,
  },
  {
    id: 11,
    name: "Κάμψεις",
    category: CategoryType.Chest,
    units: standardUnits,
  },
  {
    id: 12,
    name: "Μονόζυγο κανονική λαβή",
    category: CategoryType.Back,
    units: standardUnits,
  },
  {
    id: 13,
    name: "Μονόζυγο ανάποδη λαβή",
    category: CategoryType.Back,
    units: standardUnits,
  },
  {
    id: 14,
    name: "Μονόζυγο ανοιχτή λαβή",
    category: CategoryType.Back,
    units: standardUnits,
  },
  {
    id: 15,
    name: "Μονόζυγο κλειστή λαβή",
    category: CategoryType.Back,
    units: standardUnits,
  },
  {
    id: 16,
    name: "Κωπηλατική με μπάρα",
    category: CategoryType.Back,
    units: standardUnits,
  },
  {
    id: 17,
    name: "Κωπηλατική με αλτήρες",
    category: CategoryType.Back,
    units: standardUnits,
  },
  {
    id: 18,
    name: "Κωπηλατική με μηχάνημα",
    category: CategoryType.Back,
    units: standardUnits,
  },
  {
    id: 19,
    name: "Pull-overs με αλτήρα",
    category: CategoryType.Back,
    units: standardUnits,
  },
  {
    id: 20,
    name: "Cross-over με καλώδια",
    category: CategoryType.Back,
    units: standardUnits,
  },
  {
    id: 21,
    name: "Flyes με καλώδια",
    category: CategoryType.Back,
    units: standardUnits,
  },
];
