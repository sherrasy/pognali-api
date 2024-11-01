import { CountryQuery } from '@backend/shared-queries';
import { Country } from '@backend/shared-types';
import { SortOrder } from '@backend/util-core';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CountriesRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async showCountries({
    letter,
    region,
  }: CountryQuery): Promise<Country[] | null> {
    const queryParams = {
      where: {
        AND: {
          letter: { search: letter },
          region: { search: region },
        },
      },
      orderBy: [
        {
          name: SortOrder.asc,
        },
      ],
    };

    const countries = await this.prisma.country.findMany(queryParams);
    return countries;
  }

  public async getCountriesForCards( region?:string, ids?:number[],): Promise<number[]>{
    if(!region){
      return ids;
    }

    const queryParams = {
      where: {
        AND: {
          region: { search: region },
        },
      },
      orderBy: [
        {
          name: SortOrder.asc,
        },
      ],
    };

    const countries = await this.prisma.country.findMany(queryParams);
    const allIds = !ids ? countries.map(({id})=>id) : countries.map(({id})=>id).concat(ids);
    return allIds;
  }
}
