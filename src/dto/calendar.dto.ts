// src/dto/calendar.dto.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CalendarEvent {
  @Field(() => Int, { nullable: true })
  recordId?: number;

  @Field({ nullable: true })
  userId?: string;

  @Field({ nullable: true })
  exerciseType?: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  date: string;

  @Field(() => Int, { nullable: true })
  count?: number;

  @Field(() => Int, { nullable: true })
  kcal?: number;

  @Field({ nullable: true })
  time?: string;

  @Field({ nullable: true })
  type: 'exercise' | 'diet' | 'intake' | 'health';

  @Field({ nullable: true })
  mealType?: 'breakfast' | 'lunch' | 'dinner' | 'night' | 'dawn';

  @Field({ nullable: true })
  isComplished?: true | false;

  @Field({ nullable: true })
  weight?: number;
}
