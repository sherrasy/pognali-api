export interface Country {
  _id?: number;
  name: string;
  flag: string;
  region: string;
  letter: string;
}

export type Region = "Europe"|"Americas"|"Oceania"|"Asia"

export interface CountryApi {
  translations: { rus: { official: string; common: string } };
  region: Region;
  flags: { svg: string };
}
