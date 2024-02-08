import { Event } from './event.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { CreateEventDto } from './dto/create_event.dto'

@Injectable()
export class EventService {
    constructor(@InjectRepository(Event) private readonly eventRepository:Repository<Event>) {}

    async insertEvent(createEventDto: CreateEventDto): Promise<Event>{
        const newEvent = this.eventRepository.create(createEventDto);
        return this.eventRepository.save(newEvent);
    }

    async getEvent(): Promise<Event[]>{
        return this.eventRepository.find();
    }

    async getSingleEvent(eventID: string): Promise<Event> {
        const objectId = new ObjectId(eventID);
        return this.findEvent(objectId);
      }
    
      async updateEvent(eventID: string, updateEventDto: CreateEventDto): Promise<Event> {
        const objectId = new ObjectId(eventID);
        const event = await this.findEvent(objectId);
        Object.assign(event, updateEventDto);
        return this.eventRepository.save(event);
      }
    
      async deleteEvent(eventID: string): Promise<void> {
        const objectId = new ObjectId(eventID);
        const result = await this.eventRepository.delete(objectId);
        if (result.affected === 0) {
          throw new NotFoundException('Silme İşlemi Başarısız.');
        }
      }
    
      private async findEvent(_id: ObjectId): Promise<Event> {
        const event = await this.eventRepository.findOne({ where: { _id } });
        if (!event) {
          throw new NotFoundException('Böyle Bir Etkinlik Bulunamadı.');
        }
        return event;
      }
}