import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Card } from "@backend/shared-types";
import { CARDS_AMOUNT, DefaultParam } from "@backend/util-core";

@Injectable()
export class CardsRepository {
  constructor(private readonly prisma: PrismaService) {}
  public async showCards(page:number): Promise<Card[] | null> {
    const queryParams = {
      take: CARDS_AMOUNT,
      skip:
        page > DefaultParam.Amount
          ? CARDS_AMOUNT * (page - DefaultParam.Step)
          : undefined,
    };
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
