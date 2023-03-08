import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/decorators/user.decorator';
import { CreateEmployersDto } from './dto/create.employers.dto';
import { UpdateEmployersDto } from './dto/update.employers.dto';
import { EmployersService } from './employers.service';
@UseGuards(AuthGuard('jwt'))
@Controller('employers')
export class EmployersController {
    constructor(private readonly employersService: EmployersService) {}

    @Get()
    getEmployers(@User() userId: number) {
        return this.employersService.getEmployers(userId);
    }

    @Post('search')
    searchEmployers(@User() userId: number, @Body('name') employeeName?: string) {
        return this.employersService.searchEmployers(userId, employeeName);
    }

    @Get(':id')
    getEmployer(@Param('id') id: string) {
        return this.employersService.getEmployer(Number(id));
    }

    @Post('create')
    createEmployer(@User() userId: number, @Body() dto: CreateEmployersDto){
        return this.employersService.createEmployer(userId, dto);
    }

    @Put('update')
    updateEmployer(@User() userId: number, @Body() dto: UpdateEmployersDto){
        return this.employersService.updateEmployer(userId, dto);
    }
    
}
