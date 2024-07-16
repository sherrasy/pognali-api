import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CardRdo {
  @ApiProperty({
    description: 'Уникальный ID страны',
    example: 1,
  })
  @Expose()
  public id: number;

}
