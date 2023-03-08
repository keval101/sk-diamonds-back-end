import { IsNotEmpty, IsNumber } from 'class-validator';

export class DeleteHiraTypeDto {
  @IsNotEmpty()
  @IsNumber()
  id: number
}
