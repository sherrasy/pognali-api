import { Card } from "@backend/shared-types";

export class CardEntity implements Card {
  public _id?: number;


  constructor(card: Card) {
    this.fillEntity(card);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(card: Card) {
    this._id = card._id;

  }
}
