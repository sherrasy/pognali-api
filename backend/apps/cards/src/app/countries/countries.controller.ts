import { CountryQuery } from '@backend/shared-queries';
import { AppPath, CARDS_MESSAGE, fillObject } from '@backend/util-core';
import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CountriesService } from './countries.service';
import { CountryRdo } from './rdo/country.rdo';

@ApiTags(AppPath.Countries)
@Controller(AppPath.Countries)
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: CARDS_MESSAGE,
    type:CountryRdo,
  })

  @Get()
  public async showCountries(@Query() query: CountryQuery) {
    const countries = await this.countriesService.showCountries(query);
    return countries.map((country) => fillObject(CountryRdo, country));
  }

}
