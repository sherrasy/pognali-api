import { CardsQuery } from '@backend/shared-queries';
import { AppPath, CARDS_MESSAGE, fillObject } from '@backend/util-core';
import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CardsService } from './cards.service';
import { CardRdo } from './rdo/card.rdo';
import { CreateCardDto } from './dto/create-card.dto';

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

  @ApiResponse({
    status: HttpStatus.OK,
    description: CARDS_MESSAGE,
  })
  @ApiParam({
    name:'dto',
    type:CreateCardDto,
  })
  @Post(AppPath.Add)
  public async showFilteredApartments(@Body() dto: CreateCardDto) {
    console.log(dto);
  }

}
