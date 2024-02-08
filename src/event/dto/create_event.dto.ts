import {IsNotEmpty} from 'class-validator'

export class CreateEventDto{
   
    @IsNotEmpty({message: 'Etkinlik Adı Boş Olamaz'})
    title:string;
    @IsNotEmpty({message: 'Etkinlik Açıklaması Boş Olamaz'})
    subject:string;
    @IsNotEmpty({message: 'Etkinlik Lokasyonu Boş Olamaz'})
    location:string;
    @IsNotEmpty({message: 'Etkinlik Tarihi Boş Olamaz'})
    eventDate:Date;
    @IsNotEmpty({message: "Kullanıcı ID'si Boş Olamaz"})
    userId:string;
   
}