// src/calendar/calendar.resolver.ts
import { Query, Resolver, Args, Int } from '@nestjs/graphql';
import { CalendarService } from './calendar.service';
import { CalendarEvent } from '../dto/calendar.dto';

@Resolver(() => CalendarEvent)
export class CalendarResolver {
  constructor(private readonly calendarService: CalendarService) {}

  @Query(() => [CalendarEvent], { name: 'calendar' }) // 쿼리 이름을 calendar로 설정
  getCalendarEvents(
    @Args('year', { type: () => Int, nullable: true }) year?: number,
    @Args('month', { type: () => Int, nullable: true }) month?: number,
  ): CalendarEvent[] {
    return this.calendarService.findAll(year, month);
  }
}
