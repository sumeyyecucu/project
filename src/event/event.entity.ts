import { Entity,Column,ObjectIdColumn,ObjectId} from 'typeorm'

@Entity('events')
export class Event{
    @ObjectIdColumn()
    _id:ObjectId;  

    @Column()
    title:string;

    @Column()
    subject:string;

    @Column()
    location:string;
    
    @Column()
    eventDate:Date;

    @Column()
    userId:string;

    @Column()
    gruoupId:string;

}