import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [PrismaModule, CardsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
