import { Module } from '@nestjs/common';
import { PagarController } from './pagar.controller';
import { PagarService } from './pagar.service';

@Module({
  controllers: [PagarController],
  providers: [PagarService]
})
export class PagarModule {}
