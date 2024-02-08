import { CreateEventDto } from './dto/create_event.dto';
import { EventService } from './event.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe, UsePipes } from "@nestjs/common";
@Controller('event')
export class EventController {
    constructor(private readonly eventService: EventService) {}

    @UsePipes(ValidationPipe)
    @Post('add')
    async addEvent(@Body() createEventDto: CreateEventDto)
    {
        const event = await this.eventService.insertEvent(createEventDto);
        return {message: 'Etkinlik Ekleme İşlemi Başarılı'}
    }

    @Get('getAll')
    async getAllEvents(){
        const events = await this.eventService.getEvent();
        return events;
    }

    @Get('getById/:id')
    getSingleEvent(@Param('id') eventID: string) {
      return this.eventService.getSingleEvent(eventID);
    }

    @UsePipes(ValidationPipe)
    @Patch('update/:id')
    async updateEvent(@Param('id') eventID: string, @Body() updateEventDto: CreateEventDto) {
      await this.eventService.updateEvent(eventID, updateEventDto);
      return { message: 'Güncelleme İşlemi Başarılı' };
    }

    @Delete('delete/:id')
    async removeEvent(@Param('id') eventID: string) {
      await this.eventService.deleteEvent(eventID);
      return { message: 'Silme İşlemi Başarılı' };
    }
}