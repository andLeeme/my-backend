// src/dto/calendar.dto.ts
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType() // GraphQL에서 사용하기 위한 ObjectType 데코레이터
export class CalendarEvent {
  @Field()
  title: string;

  @Field()
  start: Date;

  @Field()
  end: Date;

  @Field({ nullable: true })
  category?: "운동" | "복용" | "식단" | "건강검진";
}
