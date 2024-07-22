import { Transport } from "@backend/util-core";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsArray, IsIn, IsInt, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class CreateCardDto {
  @ApiProperty({
    description: 'Имя пользователя',
    example:'Татьяна Ивановa'
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Аватар пользователя. Можно взять любую ссылку из полученных карточек или из сети',
    example:'https://randomuser.me/api/portraits/women/83.jpg'
  })
  @IsString()
  public photo: string;

  @ApiProperty({
    description: 'Уровень пользователя',
    example:80
  })
  @IsInt()
  public level: number;

  @ApiProperty({
    description: 'Страны, которые хочет посетить пользователь (id)',
    example:[1,2],
  })
  @IsArray()
  @IsNumber({},{each:true})
  public places: number[];

  @ApiProperty({
    description: 'Тэги',
    example:'#отдых #пляж',
    required:false
  })
  @IsString()
  @IsOptional()
  public tags?: string;

  @ApiProperty({
    description: 'Транспорт',
    enum:Transport,
    example:['plane'],
    type:Object.values(Transport)
  })
  @IsArray()
  @IsString({each:true})
  @IsIn(Object.values(Transport),{each:true})
  public transport: string[];

  @ApiProperty({
    description: 'Количество попутчиков',
    example:2
  })
  @IsInt()
  @Min(1)
  @Max(10)
  public people:number;

  @ApiProperty({
    description: 'Длительность в днях',
    example:2
  })
  @IsInt()
  @Min(2)
  @Max(31)
  public duration:number;

  @ApiProperty({
    description: 'Дата начала',
    example:'2024-07-14T20:00:00.000Z'
  })
  @IsString()
  public dateStart:string;

  @ApiProperty({
    description: 'Дата конца',
    example:"2024-07-16T20:00:00.000Z"
  })
  @IsString()
  public dateEnd:string;

  @ApiProperty({
    description: 'Развлечения',
    example:[{countryId:43, text:'Бар, концерт, спортивный фестиваль'}]
  })
  @Transform(({value})=>value.map(({countryId, text})=>`${countryId}, ${text}`))
  @IsArray()
  public entertainment:string[];

  @ApiProperty({
    description: 'Токен устройства (при наличии)',
    example:"token",
    required:false
  })
  @IsOptional()
  @IsString()
  public token?:string;
}
