import { Module } from '@nestjs/common';
import { UpadController } from './upad.controller';
import { UpadService } from './upad.service';

@Module({
  controllers: [UpadController],
  providers: [UpadService]
})
export class UpadModule {}
