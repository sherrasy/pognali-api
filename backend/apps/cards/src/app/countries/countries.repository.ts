import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Country } from "@backend/shared-types";
import { CountryQuery } from "@backend/shared-queries";

@Injectable()
export class CountriesRepository {
  constructor(private readonly prisma: PrismaService) {}
  public async showCountries({letter, region}: CountryQuery): Promise<Country[] | null> {
    const queryParams = {
      where: {
        AND: {
          letter: { search: letter },
          region: { search: region },
        },
      },
    };
    const countries = await this.prisma.country.findMany(queryParams);
    return countries;
  }
}
