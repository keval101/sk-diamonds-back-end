import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHiraTypeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  bhav: number
}
