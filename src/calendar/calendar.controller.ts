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
    const yearNum = year ? parseInt(year, 10) : undefined;
    const monthNum = month ? parseInt(month, 10) : undefined;
    return this.calendarService.findAll(yearNum, monthNum);
  }

  @Get('byParams')
  findByParams(
    @Query('memberName') memberName?: string,
    @Query('exerciseName') exerciseName?: string,
  ): CalendarEvent[] {
    return this.calendarService.findByParams(memberName, exerciseName);
  }

  @Get('exerciseTypes')
  findExerciseTypes(): string[] {
    return this.calendarService.findExerciseTypes();
  }

  @Get('uniqueExerciseNames')
  findUniqueExerciseNames(): string[] {
    return this.calendarService.findUniqueExerciseNames();
  }
}
