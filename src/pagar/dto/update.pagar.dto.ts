import { Transform } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class UpdatePagarDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsDate()
    @Transform( ({ value }) => new Date(value))
    date: Date;

    @IsNotEmpty()
    @IsNumber()
    hira: number;

    @IsNotEmpty()
    @IsNumber()
    total: number;

    @IsNotEmpty()
    @IsNumber()
    employeeId: number;
}