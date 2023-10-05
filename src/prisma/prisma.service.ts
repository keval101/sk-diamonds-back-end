import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(private config: ConfigService) {
    console.log('-------------', config.get('DATABASE_URL'))
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }
}
// url: "mysql://root:ZMnjSyUpHPWojHfcH0V9@containers-us-west-189.railway.app:7098/railway",
