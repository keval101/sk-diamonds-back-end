import { Transform } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class UpdateUpadDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

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