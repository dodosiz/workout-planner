export enum CategoryType {
  Chest = "Στήθος",
  Back = "Πλάτη",
  Legs = "Πόδια",
  Shoulders = "Ώμους",
  Arms = "Χέρια",
  Core = "Κοιλιακούς",
  Aerobic = "Αερόβιες",
  Rest = "Διάλειμμα",
}

export interface Category {
  id: number;
  name: CategoryType;
}

export function getCategoryId(name: CategoryType): number {
  return CATEGORIES.find((category) => category.name === name)!.id;
}

export const CATEGORIES = [
  { id: 1, name: CategoryType.Chest },
  { id: 2, name: CategoryType.Back },
  { id: 3, name: CategoryType.Legs },
  { id: 4, name: CategoryType.Shoulders },
  { id: 5, name: CategoryType.Arms },
  { id: 6, name: CategoryType.Core },
  { id: 7, name: CategoryType.Aerobic },
  { id: 8, name: CategoryType.Rest },
];

export const REST_CATEGORY_ID = getCategoryId(CategoryType.Rest);
