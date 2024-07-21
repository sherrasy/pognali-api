import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CardsQuery {
  @ApiProperty({
    description: 'Страна сортировки. ',
    required: false,
    example:'countryId=1 или countryId=1,2'
  })
  @Transform(({ value }) => value.split(',').map(Number))
  @IsOptional()
  public countryId?: number[];

  @ApiProperty({
    description: 'Регион (континент) сортировки, чтобы показать по всем странам определенного региона.',
    required: false,
    example:'region=europe или region=europe,asia'
  })
  @Transform(({ value }) => value.split(',').join('|'))
  @IsOptional()
  public region?: string;

  @ApiProperty({
    description: 'Текущая страница (4 элемента)',
    required: false,
  })
  @Transform(({ value }) => +value)
  @IsOptional()
  public page?: number;
}
