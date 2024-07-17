import { Injectable } from '@nestjs/common';
import { CardsRepository } from './cards.repository';
import { Card } from '@backend/shared-types';

@Injectable()
export class CardsService {
  constructor(private readonly cardsRepository: CardsRepository) {}

  public async showCards(): Promise<Card[]> {
    return this.cardsRepository.showCards(0);
  }

  public async getPages(): Promise<number> {
    return this.cardsRepository.getPagesAmount();
  }
}
