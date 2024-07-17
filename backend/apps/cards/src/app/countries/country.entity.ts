import {Country} from '@backend/shared-types'
export class CountryEntity implements Country {
  public _id?: number;
  public name: string;
  public flag: string;
  public region: string;
  public letter: string;


  constructor(country: Country) {
    this.fillEntity(country);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(country: Country) {
    this._id = country._id;
    this.name = country.name;
    this.flag = country.flag;
    this.region = country.region;
    this.letter = country.letter;
  }
}