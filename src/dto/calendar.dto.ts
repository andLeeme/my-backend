// src/dto/calendar.dto.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CalendarEvent {
  @Field(() => Int)
  exerciseRecordId: number;

  @Field()
  memberName: string;

  @Field()
  exerciseName: string;

  @Field()
  exerciseDate: string;

  @Field(() => Int)
  exerciseCount: number;

  @Field()
  exerciseTime: string;

  @Field()
  exerciseType: string;
}
