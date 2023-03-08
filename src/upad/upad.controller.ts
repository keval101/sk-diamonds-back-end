import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/decorators/user.decorator';
import { PagarService } from 'src/pagar/pagar.service';
import { CreateUpadDto } from './dto/create.upad.dto';
import { UpdateUpadDto } from './dto/update.upad.dto';
import { UpadService } from './upad.service';

@UseGuards(AuthGuard('jwt'))
@Controller('upad')
export class UpadController {
    constructor(private readonly upadService: UpadService) {}
    
    @Get(':id')
    getEmployer(@Param('id') id: string) {
        return this.upadService.getEmployerUpad(Number(id));
    }

    @Post('create')
    createUpad(@User() userId: number, @Body() dto: CreateUpadDto) {
        return this.upadService.createUpad(userId, dto);
    }

    @Put('update')
    updateUpad(@User() userId: number, @Body() dto: UpdateUpadDto) {
        return this.upadService.updateUpad(userId, dto);
    }

    
    @Delete('delete/:id')
    deleteHiraTypes(@User() userId: number, @Param('id') upadId: number){
        return this.upadService.deleteUpad(userId, Number(upadId));
    }
}
