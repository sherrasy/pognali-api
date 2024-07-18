import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Card, Country } from "@backend/shared-types";
import { CARDS_AMOUNT, DefaultParam } from "@backend/util-core";
import { CardsQuery } from "@backend/shared-queries";

@Injectable()
export class CardsRepository {
  constructor(private readonly prisma: PrismaService) {}
  public async showCards({page}:CardsQuery, countries:number[]|null): Promise<Card[] | null> {
    const queryParams = {
      where: {
          places: undefined,
      },
      take: CARDS_AMOUNT,
      skip:
        page > DefaultParam.Amount
          ? CARDS_AMOUNT * (page - DefaultParam.Step)
          : undefined,
    };
    if(countries){
      queryParams.where.places = { hasSome: countries };
    }
    const cards = await this.prisma.card.findMany(queryParams);
    return cards;
  }

  public async getPagesAmount (): Promise<number>{
    const amount = await this.prisma.card.count();
    const pages = Math.ceil(amount/CARDS_AMOUNT);
    return pages;
  }

  // public async createCard({letter, region}: Query): Promise<Card[] | null> {

  // }
}
