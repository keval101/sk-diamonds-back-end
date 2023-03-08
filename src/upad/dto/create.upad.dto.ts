import { Transform } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class CreateUpadDto {

    @IsNotEmpty()
    @IsDate()
    @Transform( ({ value }) => new Date(value))
    date: Date;

    @IsNotEmpty()
    @IsNumber()
    upad: number;

    @IsNotEmpty()
    @IsNumber()
    employeeId: number;
}