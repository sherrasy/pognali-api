import { Transform } from 'class-transformer';
import { IsArray, IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CardsQuery {
  @ApiProperty({
    description: 'Страна сортировки. countryId=1 или countryId=1,2',
    required: false,
    example:"1"
  })
  @Transform(({ value }) => value.split(',').map(Number))
  @IsOptional()
  public countryId?: number[];

  @ApiProperty({
    description: 'Регион (континент) сортировки, чтобы показать по всем странам определенного региона. region=europe или region=europe,asia',
    required: false,
    example:'europe'
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
