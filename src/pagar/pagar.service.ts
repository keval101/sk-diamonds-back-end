import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePagarDto } from './dto/create.pagar.dto';
import { UpdatePagarDto } from './dto/update.pagar.dto';

@Injectable()
export class PagarService {
    constructor(private readonly prisma: PrismaService) {}

    async getEmployerPagar(employeeId: number) {
        // const employeeId = dto.employeeId;
        const data = await this.prisma.pagar.findMany({
            where: {
                employeeId: employeeId
            }
        })
        return data;
    }

    async getTotalHira(userId: number) {
        const hira = await this.prisma.pagar.findMany({
            where: {
                userId: userId
            }
        })

        const upad = await this.prisma.upad.findMany({
            where: {
                userId: userId
            }
        })

        const pagar = await this.prisma.pagar.findMany({
            where: {
                userId: userId
            }
        })

        const totalHira = hira.reduce((acc: any, obj: any) => {
            console.log(acc, obj)
            console.log('----')
            return (acc + Number(obj.hira))
        }, 0)

        const totalUpad = upad.reduce((acc: any, obj: any) => {
            console.log(acc, obj)
            console.log('----')
            return (acc + Number(obj.upad))
        }, 0)

        return {totalHira, totalUpad }
    }

    async createPagar(userId: number, dto: CreatePagarDto) {
        const employeeId = dto.employeeId;
        const data = await this.prisma.pagar.create({
            data: {
                userId: userId,
                employeeId,
                date: dto.date,
                hira: dto.hira,
                total: dto.total,
            }
        })
        return data;
    }

    async updatePagar(userId: number, dto: UpdatePagarDto) {
        const employeeId = dto.employeeId;
        const data = await this.prisma.pagar.update({
            where: {
                id: dto.id,
            },
            data: {
                userId: userId,
                employeeId,
                date: dto.date,
                hira: dto.hira,
                total: dto.total,
            }
        })
        return data;
    }

    async deletePagar(userId: number, pagarId: number) {
        const data = await this.prisma.pagar.delete({
            where: {
                id: pagarId
            },
        })

        return data;
    }
}
