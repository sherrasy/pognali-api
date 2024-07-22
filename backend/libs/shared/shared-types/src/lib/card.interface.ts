export type Entertainment = {
  countryId: number;
  text: string;
};

export interface CardData{
  cards:Card[],
  pages:number
}

export interface Card {
  _id?: number;
  token: string;
  name: string;
  photo: string;
  places: number[];
  tags?: string;
  transport: string[];
  level: number;
  people: number;
  duration: number;
  dateStart: string;
  dateEnd: string;
  entertainment: string[];
}
