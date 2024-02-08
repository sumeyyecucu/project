import { CreateEventPartDto } from './dto/create_event_participant.dto';
import { EventPartService } from './event_part.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe, UsePipes } from "@nestjs/common";
@Controller('event_part')
export class EventPartController {
    constructor(private readonly eventPartService: EventPartService) {}

    @UsePipes(ValidationPipe)
    @Post('add')
    async addEventPart(@Body() createEventPartDto: CreateEventPartDto)
    {
        const event = await this.eventPartService.insertEventPart(createEventPartDto);
        return {message: 'Katılımcı Ekleme İşlemi Başarılı'}
    }

    @Get('getAll')
    async getAllEvents(){
        const events = await this.eventPartService.getEvent();
        return events;
    }

    @Get('getById/:id')
    getSingleEvent(@Param('id') eventPartId: string) {
      return this.eventPartService.getSingleEvent(eventPartId);
    }

    @UsePipes(ValidationPipe)
    @Patch('update/:id')
    async updateEvent(@Param('id') eventPartId: string, @Body() updateEventDto: CreateEventPartDto) {
      await this.eventPartService.updateEvent(eventPartId, updateEventDto);
      return { message: 'Güncelleme İşlemi Başarılı' };
    }

    @Delete('delete/:id')
    async removeEvent(@Param('id') eventPartId: string) {
      await this.eventPartService.deleteEvent(eventPartId);
      return { message: 'Silme İşlemi Başarılı' };
    }
}