// src/calendar/calendar.resolver.ts
import { Query, Resolver } from '@nestjs/graphql';
import { CalendarService } from './calendar.service';
import { CalendarEvent } from '../dto/calendar.dto';

@Resolver(() => CalendarEvent)
export class CalendarResolver {
  constructor(private readonly calendarService: CalendarService) {}

  @Query(() => [CalendarEvent], { name: 'calendar' }) // 쿼리 이름을 calendar로 설정
  getCalendarEvents(): CalendarEvent[] {
    return this.calendarService.findAll();
  }
}
