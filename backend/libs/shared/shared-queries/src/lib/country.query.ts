import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CountryQuery {
  @ApiProperty({
    description: 'Буква сортировки',
    required: false,
    example:'letter=А или letter=А,Б'
  })
  @Transform(({ value }) => value.split(',').join('|'))
  @IsOptional()
  public letter?: string;

  @ApiProperty({
    description: 'Регион (континент) сортировки',
    required: false,
    example:'region=europe или region=europe,asia'
  })
  @Transform(({ value }) => value.split(',').join('|'))
  @IsOptional()
  public region?: string;
}
