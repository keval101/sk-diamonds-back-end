import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/decorators/user.decorator';
import { CreatePagarDto } from './dto/create.pagar.dto';
import { UpdatePagarDto } from './dto/update.pagar.dto';
import { PagarService } from './pagar.service';

@UseGuards(AuthGuard('jwt'))
@Controller('pagar')
export class PagarController {
    constructor(private readonly pagarService: PagarService) {}
    
    @Get(':id')
    getEmployer(@Param('id') id: string) {
        return this.pagarService.getEmployerPagar(Number(id));
    }

    @Post('create')
    createPagar(@User() userId: number, @Body() dto: CreatePagarDto) {
        return this.pagarService.createPagar(userId, dto);
    }

    @Put('update')
    updatePagar(@User() userId: number, @Body() dto: UpdatePagarDto) {
        return this.pagarService.updatePagar(userId, dto);
    }
}