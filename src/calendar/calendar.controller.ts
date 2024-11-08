// src/calendar/calendar.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CalendarEvent } from '../dto/calendar.dto';

@Controller('calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get()
  findAll(
    @Query('year') year?: string,
    @Query('month') month?: string,
  ): CalendarEvent[] {
    // 문자열로 전달된 쿼리 파라미터를 숫자로 변환하여 서비스로 전달
    const yearNum = year ? parseInt(year, 10) : undefined;
    const monthNum = month ? parseInt(month, 10) : undefined;
    return this.calendarService.findAll(yearNum, monthNum);
  }
}
