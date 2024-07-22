import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CardRdo {
  @ApiProperty({
    description: 'Уникальный ID пользователя',
    example: 1,
  })
  @Expose()
  public id: number;

  @ApiProperty({
    description: 'Токен пользователя',
    example: 1,
  })
  @Expose()
  public token: string;

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
    example: [1,65],
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
