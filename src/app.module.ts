import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {typeOrmConfig} from './config/typeorm_config';
import { EventModule } from './event/event.module';
import { EventPartModule } from './event_participant/event_part.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),EventModule,EventPartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
