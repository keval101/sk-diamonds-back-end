import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HiraTypesModule } from './hira-types/hira-types.module';
import { PrismaModule } from './prisma/prisma.module';
import { EmployersModule } from './employers/employers.module';
import { PagarModule } from './pagar/pagar.module';
import { UpadModule } from './upad/upad.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HiraTypesModule,
    PrismaModule,
    EmployersModule,
    PagarModule,
    UpadModule,
    AuthModule,
    JwtModule.register({}) 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
