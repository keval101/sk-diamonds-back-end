import { HiraType } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateEmployersDto {
  @IsNotEmpty()
  @IsNumber()
  id: number

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  phonenumber: string;
  
  @IsNotEmpty()
  @IsNumber()
  typeId: number
}
