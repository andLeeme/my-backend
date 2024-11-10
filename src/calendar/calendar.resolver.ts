// src/calendar/calendar.resolver.ts
import { Query, Resolver, Args, Int } from '@nestjs/graphql';
import { CalendarService } from './calendar.service';
import { CalendarEvent } from '../dto/calendar.dto';

@Resolver(() => CalendarEvent)
export class CalendarResolver {
  constructor(private readonly calendarService: CalendarService) {}

  @Query(() => [CalendarEvent], { name: 'calendar' })
  getCalendarEvents(
    @Args('year', { type: () => Int, nullable: true }) year?: number,
    @Args('month', { type: () => Int, nullable: true }) month?: number,
  ): CalendarEvent[] {
    return this.calendarService.findAll(year, month);
  }

  @Query(() => [CalendarEvent], { name: 'calendarByParams' })
  getCalendarEventsByParams(
    @Args('memberName', { type: () => String, nullable: true })
    memberName?: string,
    @Args('exerciseName', { type: () => String, nullable: true })
    exerciseName?: string,
  ): CalendarEvent[] {
    return this.calendarService.findByParams(memberName, exerciseName);
  }

  @Query(() => [String], { name: 'exerciseTypes' })
  getExerciseTypes(): string[] {
    return this.calendarService.findExerciseTypes();
  }

  @Query(() => [String], { name: 'uniqueExerciseNames' })
  getUniqueExerciseNames(): string[] {
    return this.calendarService.findUniqueExerciseNames();
  }
}
