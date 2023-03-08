import { IsNotEmpty, IsNumber } from 'class-validator';

export class DeleteEmployersDto {
  @IsNotEmpty()
  @IsNumber()
  id: number
}
