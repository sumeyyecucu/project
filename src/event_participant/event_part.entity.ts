import { Entity,Column,ObjectIdColumn,ObjectId} from 'typeorm'

@Entity('event_part')
export class EventParticipant{
    @ObjectIdColumn()
    _id:ObjectId;  

    @Column()
    eventId:string;

    @Column()
    userId:string;
}