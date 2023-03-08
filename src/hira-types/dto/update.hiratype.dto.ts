import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateHiraTypeDto {
  @IsNotEmpty()
  @IsNumber()
  id: number

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  bhav: number
}
