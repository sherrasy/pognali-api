import { CardsQuery } from "@backend/shared-queries";
import { Card } from "@backend/shared-types";
import { CARDS_AMOUNT, DefaultParam, SortOrder } from "@backend/util-core";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CardEntity } from "./card.entity";

@Injectable()
export class CardsRepository {
  constructor(private readonly prisma: PrismaService) {}
  public async showCards({page}:CardsQuery, countries:number[]|null): Promise<Card[] | null> {
    const queryParams = {
      where: {
          places: undefined,
      },
      take: CARDS_AMOUNT,
      orderBy: [{ id: SortOrder.desc }],
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

  public async createCard(data: CardEntity): Promise<Card> {
    return await this.prisma.card.create({data});
  }
}
