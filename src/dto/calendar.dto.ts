// src/dto/calendar.dto.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType() // GraphQL에서 사용할 수 있는 타입으로 지정
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
  category: string;
}
