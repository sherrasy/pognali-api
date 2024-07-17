import { Card, Country, Transport,Entertainment } from "@backend/shared-types";

export class CardEntity implements Card {
  public _id?: number;
  public name: string;
  public photo: string;
  public places: number[];
  public tags?: string[];
  public transport: string[];
  public level: number;
  public people:number;
  public duration:number;
  public dateStart:string;
  public dateEnd:string;
  public entertainment:string[];


  constructor(card: Card) {
    this.fillEntity(card);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(card: Card) {
    this._id = card._id;
    this.name = card.name;
    this.photo = card.photo;
    this.places = card.places;
    this.tags = card.tags;
    this.transport = card.transport;
    this.level = card.level;
    this.people = card.people;
    this.duration = card.duration;
    this.dateStart = card.dateStart;
    this.dateEnd = card.dateEnd;
    this.entertainment = card.entertainment;
  }
}
