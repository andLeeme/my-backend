// src/calendar/calendar.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CalendarEvent } from '../dto/calendar.dto';

@Controller('calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get('')
  findByFilter(
    @Query('type') type?: string,
    @Query('exerciseType') exerciseType?: string,
    @Query('name') name?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ): CalendarEvent[] {
    return this.calendarService.findByParams(
      type,
      exerciseType,
      name,
      startDate,
      endDate,
    );
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
