import { CardsQuery } from "@backend/shared-queries";
import { Card, CardData } from "@backend/shared-types";
import { CARDS_AMOUNT, DefaultParam, SortOrder } from "@backend/util-core";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CardEntity } from "./card.entity";

@Injectable()
export class CardsRepository {
  constructor(private readonly prisma: PrismaService) { }
  public async showCards({ page }: CardsQuery, countries: number[] | null): Promise<CardData | null> {
    const queryParams = {
      where: {
        places: undefined,
      },
      orderBy: [{ id: SortOrder.desc }],
    };
    const skipParam = {
      take: CARDS_AMOUNT,
      skip:
        page > DefaultParam.Amount
          ? CARDS_AMOUNT * (page - DefaultParam.Step)
          : undefined,
    }
    if (countries) {
      queryParams.where.places = { hasSome: countries };
    }
    const cards = await this.prisma.card.findMany({ ...queryParams, ...skipParam });
    const amount = await this.prisma.card.count(queryParams);
    const pages = Math.ceil(amount / CARDS_AMOUNT)
    return { cards, pages };
  }

  public async createCard(data: CardEntity): Promise<Card> {
    return await this.prisma.card.create({ data });
  }
}

