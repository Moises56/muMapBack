import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  @IsOptional()
  nameUser: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsString()
  @IsOptional()
  address: string;
}
