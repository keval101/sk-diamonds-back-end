import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(private config: ConfigService) {
    super({
      datasources: {
        db: {
          url: "mysql://u4cr2p24w2fml3ds:nQGZ02ySQax5ZwQhWEBl@brahw1q4pbv5daxolxl2-mysql.services.clever-cloud.com:3306/brahw1q4pbv5daxolxl2",
        },
      },
    });
  }
}
// url: "mysql://root:ZMnjSyUpHPWojHfcH0V9@containers-us-west-189.railway.app:7098/railway",
