import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../decorators/user.decorator';
import { CreateHiraTypeDto } from './dto/create.hiratype.dto';
import { UpdateHiraTypeDto } from './dto/update.hiratype.dto';
import { HiraTypesService } from './hira-types.service';

@UseGuards(AuthGuard('jwt'))
@Controller('hira-types')
export class HiraTypesController {
    constructor(private readonly hiraTypeService: HiraTypesService){}

    @Get()
    getHiraTypes(@User() userId: number){
        return this.hiraTypeService.getHiraTypes(userId);
    }

    @Post('create')
    createHiraTypes(@User() userId: number, @Body() dto: CreateHiraTypeDto){
        return this.hiraTypeService.createHiraTypes(userId, dto);
    }

    @Put('update')
    updateHiraTypes(@User() userId: number, @Body() dto: UpdateHiraTypeDto){
        return this.hiraTypeService.updateHiraTypes(userId, dto);
    }

    @Delete('delete/:id')
    deleteHiraTypes(@User() userId: number, @Param('id') hiraTypeId: number){
        return this.hiraTypeService.deleteHiraTypes(userId, Number(hiraTypeId));
    }
}
