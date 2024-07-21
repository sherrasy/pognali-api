export const CARDS_MESSAGE = 'Данные загружены';
export const CARDS_AMOUNT = 4;

export const DefaultParam = {
  Step: 1,
  Amount: 0,
  Status: false,
};

export const RegionToName = {
  Europe: 'Европа',
  Americas: 'Америка',
  Oceania: 'Острова',
  Asia: 'Азия',
};

export const AppPath = {
  Cards: 'cards',
  Add: 'add',
  Countries: 'countries',
} as const;

export const SortOrder = {
  asc: 'asc',
  desc: 'desc',
} as const;

export const Transport = {
  plane: 'plane',
  bus: 'bus',
  bycicle: 'bycicle',
  walking: 'walking',
} as const;
