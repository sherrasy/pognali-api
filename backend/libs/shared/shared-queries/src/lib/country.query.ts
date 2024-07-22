import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CountryQuery {
  @ApiProperty({
    description: 'Буква сортировки. letter=А или letter=А,Б',
    required: false,
    example:'А'
  })
  @Transform(({ value }) => value.split(',').join('|'))
  @IsOptional()
  public letter?: string;

  @ApiProperty({
    description: 'Регион (континент) сортировки. region=europe или region=europe,asia',
    required: false,
    example:'europe'
  })
  @Transform(({ value }) => value.split(',').join('|'))
  @IsOptional()
  public region?: string;
}
