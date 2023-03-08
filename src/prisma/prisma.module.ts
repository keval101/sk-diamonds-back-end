import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { HiraTypesModule } from '../hira-types/hira-types.module';

@Global()
@Module({
  providers: [PrismaService, ConfigService],
  exports: [PrismaService],
  imports: [HiraTypesModule],
})
export class PrismaModule {}
