import { BadRequestException, Injectable } from '@nestjs/common';
import { CardsRepository } from './cards.repository';
import { Card, CardData } from '@backend/shared-types';
import { CardsQuery } from '@backend/shared-queries';
import { CountriesRepository } from '../countries/countries.repository';
import { CreateCardDto } from './dto/create-card.dto';
import { CardEntity } from './card.entity';
import { v6 as uuidv6 } from 'uuid';
import { CARDS_AMOUNT } from '@backend/util-core';

@Injectable()
export class CardsService {
  constructor(
    private readonly cardsRepository: CardsRepository,
    private readonly countriesRepository: CountriesRepository
  ) {}

  public async showCards(query: CardsQuery): Promise<CardData> {
    const countriesData =
     ( query.countryId || query.region)
        ? await this.countriesRepository.getCountriesForCards(
            query.region, query.countryId,
          )
        : null;
    return this.cardsRepository.showCards(query, countriesData);
  }

  public async createCard(dto: CreateCardDto) {
    const token = dto.token ? dto.token : uuidv6();
    const data = new CardEntity({...dto, token});
    return await this.cardsRepository.createCard(data);
  }
}
