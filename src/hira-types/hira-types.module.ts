import { Module } from '@nestjs/common';
import { HiraTypesController } from './hira-types.controller';
import { HiraTypesService } from './hira-types.service';

@Module({
  controllers: [HiraTypesController],
  providers: [HiraTypesService]
})
export class HiraTypesModule {}
