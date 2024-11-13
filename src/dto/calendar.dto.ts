// src/dto/calendar.dto.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CalendarEvent {
  @Field(() => Int, { nullable: true })
  exerciseRecordId?: number;

  @Field({ nullable: true })
  memberName?: string;

  @Field({ nullable: true })
  exerciseName?: string;

  @Field({ nullable: true })
  exerciseDate?: string;

  @Field(() => Int, { nullable: true })
  exerciseCount?: number;

  @Field(() => Int, { nullable: true })
  kcal?: number;

  @Field({ nullable: true })
  exerciseTime?: string;

  @Field({ nullable: true })
  exerciseType?: string;
}
