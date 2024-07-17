import { Entertainment } from '@backend/shared-types';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { CountryRdo } from '../../countries/rdo/country.rdo';

export class CardRdo {
  @ApiProperty({
    description: 'Уникальный ID пользователя',
    example: 1,
  })
  @Expose()
  public id: number;

  @ApiProperty({
    description: 'Имя пользователя',
    example: 'Татьяна',
  })
  @Expose()
  public name: string;

  @ApiProperty({
    description: 'Фото пользователя',
    example: 'https://randomuser.me/api/portraits/women/80.jpg',
  })
  @Expose()
  public photo: string;

  @ApiProperty({
    description: 'Страны которые хочет посетить',
    example: '',
  })
  @Expose()
  public places: number[];

  @ApiProperty({
    description: 'Тэги',
    example: '#ЗОЖ',
  })
  @Expose()
  public tags?: string[];

  @ApiProperty({
    description: 'Транспорт пользователя',
    example: 'plane',
  })
  @Expose()
  public transport: string[];

  @ApiProperty({
    description: 'Уровень пользователя',
    example: 80,
  })
  @Expose()
  public level: number;

}