import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { CardsModule } from './cards/cards.module';
import { CountriesModule } from './countries/countries.module';

@Module({
  imports: [PrismaModule, CardsModule, CountriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
