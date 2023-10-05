import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUpadDto } from './dto/create.upad.dto';
import { UpdateUpadDto } from './dto/update.upad.dto';

@Injectable()
export class UpadService {
    constructor(private readonly prisma: PrismaService) {}
    
    async getEmployerUpad(employeeId: number) {
        // const employeeId = dto.employeeId;
        const data = await this.prisma.upad.findMany({
            where: {
                employeeId: employeeId
            }
        })
        return data;
    }

    async createUpad(userId: number, dto: CreateUpadDto) {
        const employeeId = dto.employeeId;
        const data = await this.prisma.upad.create({
            data: {
                userId: userId,
                employeeId,
                date: dto.date,
                upad: dto.upad
            }
        })
        return data;
    }

    async updateUpad(userId: number, dto: UpdateUpadDto) {
        const employeeId = dto.employeeId;
        const data = await this.prisma.upad.update({
            where: {
                id: dto.id,
            },
            data: {
                userId: userId,
                employeeId,
                date: dto.date,
                upad: dto.upad,
            }
        })
        return data;
    }

    
    async deleteUpad(userId: number, upadId: number) {
        const data = await this.prisma.upad.delete({
            where: {
                id: upadId
            },
        })

        return data;
    }
}
