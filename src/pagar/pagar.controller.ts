import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../decorators/user.decorator';
import { CreatePagarDto } from './dto/create.pagar.dto';
import { UpdatePagarDto } from './dto/update.pagar.dto';
import { PagarService } from './pagar.service';

@UseGuards(AuthGuard('jwt'))
@Controller('pagar')
export class PagarController {
    constructor(private readonly pagarService: PagarService) {}
    
    @Get('pagar/:id')
    getEmployer(@Param('id') id: string) {
        return this.pagarService.getEmployerPagar(Number(id));
    }

    @Get('/total-hira')
    getTotalHira(@User() userId: number) {
        console.log(userId)
        return this.pagarService.getTotalHira(userId);
    }

    @Post('create')
    createPagar(@User() userId: number, @Body() dto: CreatePagarDto) {
        return this.pagarService.createPagar(userId, dto);
    }

    @Put('update')
    updatePagar(@User() userId: number, @Body() dto: UpdatePagarDto) {
        return this.pagarService.updatePagar(userId, dto);
    }

    @Delete('delete/:id')
    deleteHiraTypes(@User() userId: number, @Param('id') pagarId: number){
        return this.pagarService.deletePagar(userId, Number(pagarId));
    }
}
