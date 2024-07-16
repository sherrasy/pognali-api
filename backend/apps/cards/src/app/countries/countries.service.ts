import { CountryQuery } from '@backend/shared-queries';
import { Country } from '@backend/shared-types';
import { Injectable } from '@nestjs/common';
import { CountriesRepository } from './countries.repository';

@Injectable()
export class CountriesService {
  constructor(private readonly countriesRepository: CountriesRepository) {}

  public async showCountries(query: CountryQuery): Promise<Country[]> {
    return this.countriesRepository.showCountries(query);
  }
}
