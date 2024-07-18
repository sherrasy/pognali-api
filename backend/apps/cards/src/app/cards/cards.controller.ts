import { CardsQuery } from '@backend/shared-queries';
import { AppPath, CARDS_MESSAGE, fillObject } from '@backend/util-core';
import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CardsService } from './cards.service';
import { CardRdo } from './rdo/card.rdo';

@ApiTags(AppPath.Cards)
@Controller(AppPath.Cards)
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}
  @ApiResponse({
    status: HttpStatus.OK,
    description: CARDS_MESSAGE,
    type:CardRdo,
  })

  @Get()
  public async showCards(@Query() query: CardsQuery) {
    const cards = await this.cardsService.showCards(query);
    const pagesTotal = await this.cardsService.getPages();
    return {cards: cards.map((card) => fillObject(CardRdo, card)), pagesTotal};
  }


}
