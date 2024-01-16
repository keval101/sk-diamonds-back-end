import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEmployersDto } from './dto/create.employers.dto';
import { UpdateEmployersDto } from './dto/update.employers.dto';

@Injectable()
export class EmployersService {
    constructor(private readonly prisma: PrismaService) {}

    async getEmployers(userId: number) {
        const data = await this.prisma.employee.findMany({
            where: {
                userId: userId
            },
            include: {
                type: true
            }
        })

        return data;
    }

    async searchEmployers(userId: number, employeeName?: string) {
        const data = await this.prisma.employee.findMany({
            where: {
                userId: userId,
                OR: [
                  {
                    name: { contains: employeeName || '' },
                  },
                ]
            },
            include: {
                type: true
            }
        })

        return data;
    }


    
    async getEmployer(employeeId: number) {
        const data = await this.prisma.employee.findUnique({
            where: {
                id: employeeId,
            },
            include: {
                type: true,
                upad: true,
                pagar: true
            }
        })

        return data;
    }

    async createEmployer(userId: number, dto: CreateEmployersDto) {
        const data = await this.prisma.employee.create({
            data: {
                userId: userId,
                ...dto
            }
        })

        return data;
    }

    async updateEmployer(userId: number, dto: UpdateEmployersDto) {
        const data = await this.prisma.employee.update({
            where: {
                id: dto.id
            },
            data: {
                userId: userId,
                ...dto
            }
        })
        return data;
    }

    async deleteEmployer(employeeId: number) {
        const data = await this.prisma.employee.delete({
            where: {
                id: employeeId
            },
        })

        return data;
    }
}
