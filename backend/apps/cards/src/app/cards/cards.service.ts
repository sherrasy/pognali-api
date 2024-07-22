import { BadRequestException, Injectable } from '@nestjs/common';
import { CardsRepository } from './cards.repository';
import { Card } from '@backend/shared-types';
import { CardsQuery } from '@backend/shared-queries';
import { CountriesRepository } from '../countries/countries.repository';
import { CreateCardDto } from './dto/create-card.dto';
import { CardEntity } from './card.entity';
import { v6 as uuidv6 } from 'uuid';

@Injectable()
export class CardsService {
  constructor(
    private readonly cardsRepository: CardsRepository,
    private readonly countriesRepository: CountriesRepository
  ) {}

  public async showCards(query: CardsQuery): Promise<Card[]> {
    const countriesData =
     ( query.countryId || query.region)
        ? await this.countriesRepository.getCountriesForCards(
            query.countryId,
            query.region
          )
        : null;
    return this.cardsRepository.showCards(query, countriesData);
  }

  public async getPages(): Promise<number> {
    return this.cardsRepository.getPagesAmount();
  }

  public async createCard(dto: CreateCardDto) {
    const token = dto.token ? dto.token : uuidv6();
    const data = new CardEntity({...dto, token});
    return await this.cardsRepository.createCard(data);
  }
}
