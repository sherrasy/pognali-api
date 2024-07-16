import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CountryRdo {
  @ApiProperty({
    description: 'Уникальный ID страны',
    example: 1,
  })
  @Expose()
  public id: number;

  @ApiProperty({
    description: 'Название страны',
    example: 'Греция',
  })
  @Expose()
  public name: string;

  @ApiProperty({
    description: 'Флаг страны',
    example: 'https://flagcdn.com/gr.svg',
  })
  @Expose()
  public flag: string;

  @ApiProperty({
    description: 'Регион страны',
    example: 'europe',
  })
  @Expose()
  public region: string;

  @ApiProperty({
    description: 'Буква для сортировок',
    example: 'Г',
  })
  @Expose()
  public letter: string;

}
