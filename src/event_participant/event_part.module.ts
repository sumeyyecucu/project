import { EventParticipant } from './event_part.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EventPartController } from './event_part.controller';
import { EventPartService } from './event_part.service';

@Module({
  imports:[TypeOrmModule.forFeature([EventParticipant])],
  controllers: [EventPartController],
  providers: [EventPartService]
})
export class EventPartModule {}