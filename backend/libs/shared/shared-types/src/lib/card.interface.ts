import { Country } from './country.interface';

export type Transport = 'plane' | 'bus' | 'bycicle' | 'walking';
export type Entertainment = {
  countryId: number;
  text: string;
};

export interface Card {
  _id?: number;
  name: string;
  photo: string;
  places: number[];
  tags?: string[];
  transport: string[];
  level: number;
  people: number;
  duration: number;
  dateStart: string;
  dateEnd: string;
  entertainment: string[];
}
