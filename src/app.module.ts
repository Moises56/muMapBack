import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './api/location/location.module';
import { PrismaService } from './api/prisma/prisma.service';
import { PrismaModule } from './api/prisma/prisma.module';

@Module({
  imports: [LocationModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
