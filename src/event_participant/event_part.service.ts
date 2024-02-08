import { EventParticipant } from './event_part.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { CreateEventPartDto } from './dto/create_event_participant.dto'

@Injectable()
export class EventPartService {
    constructor(@InjectRepository(EventParticipant) private readonly eventPartRepository:Repository<EventParticipant>) {}

    async insertEventPart(createEventPartDto: CreateEventPartDto): Promise<EventParticipant>{
        const newEventPart = this.eventPartRepository.create(createEventPartDto);
        return this.eventPartRepository.save(newEventPart);
    }

    async getEvent(): Promise<EventParticipant[]>{
        return this.eventPartRepository.find();
    }

    async getSingleEvent(eventPartId: string): Promise<EventParticipant> {
        const objectPartId = new ObjectId(eventPartId);
        return this.findEvent(objectPartId);
      }
    
      async updateEvent(eventPartId: string, updateEventPartDto: CreateEventPartDto): Promise<EventParticipant> {
        const objectPartId = new ObjectId(eventPartId);
        const eventPart = await this.findEvent(objectPartId);
        Object.assign(eventPart, updateEventPartDto);
        return this.eventPartRepository.save(eventPart);
      }
    
      async deleteEvent(eventPartId: string): Promise<void> {
        const objectPartId = new ObjectId(eventPartId);
        const result = await this.eventPartRepository.delete(objectPartId);
        if (result.affected === 0) {
          throw new NotFoundException('Silme İşlemi Başarısız.');
        }
      }
    
      private async findEvent(_id: ObjectId): Promise<EventParticipant> {
        const eventPart = await this.eventPartRepository.findOne({ where: { _id } });
        if (!eventPart) {
          throw new NotFoundException('Böyle Bir Ürün Bulunamadı.');
        }
        return eventPart;
      }
}