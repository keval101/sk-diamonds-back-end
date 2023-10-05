import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHiraTypeDto } from './dto/create.hiratype.dto';
import { UpdateHiraTypeDto } from './dto/update.hiratype.dto';

@Injectable()
export class HiraTypesService {
    constructor(private readonly prisma: PrismaService) {}

    async getHiraTypes(userId: number) {
        const data = await this.prisma.hiraType.findMany({
            where: {
                userId: userId,
            }
        })

        return data;
    }

    async createHiraTypes(userId: number, dto: CreateHiraTypeDto) {
        const data = await this.prisma.hiraType.create({
            data: {
                userId: userId,
                ...dto
            }
        })

        return data;
    }

    async updateHiraTypes(userId: number, dto: UpdateHiraTypeDto) {
        const data = await this.prisma.hiraType.update({
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

    async deleteHiraTypes(userId: number, hiraTypeId: number) {
        const data = await this.prisma.hiraType.delete({
            where: {
                id: hiraTypeId
            },
        })

        return data;
    }
}
