import { IsString, IsEmail, IsNotEmpty, IsNumber, IsEmpty } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  @IsString()
  phonenumber: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsEmpty()
  firstName?: string;

  @IsString()
  @IsEmpty()
  lastName?: string
}
