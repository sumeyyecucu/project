import {IsNotEmpty} from 'class-validator'

export class CreateEventPartDto{
   @IsNotEmpty({message: "Etkinlik ID'si Boş Olamaz"})
    eventId:string;
   @IsNotEmpty({message: "Kullanıcı ID'si Boş Olamaz"})
    userId:string;
   
}