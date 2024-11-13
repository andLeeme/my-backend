// src/calendar/calendar.service.ts
import { Injectable } from '@nestjs/common';
import { CalendarEvent } from '../dto/calendar.dto';
import { EXERCISE_DATA } from '../data/exerciseData';
import * as dayjs from 'dayjs';
import * as isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import * as isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

@Injectable()
export class CalendarService {
  private readonly events: CalendarEvent[] = EXERCISE_DATA;

  findAll(year?: number, month?: number): CalendarEvent[] {
    return this.events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        (!year || eventDate.getFullYear() === year) &&
        (!month || eventDate.getMonth() + 1 === month)
      );
    });
  }
  findByParams(
    type?: string,
    exerciseType?: string,
    name?: string,
    startDate?: string,
    endDate?: string,
  ): CalendarEvent[] {
    return this.events.filter((event) => {
      const matchesType = !type || event.type === type;
      const matchesExerciseType =
        !exerciseType || event.exerciseType === exerciseType;
      const matchesName = !name || event.name === name;

      const eventDate = dayjs(event.date);
      const matchesStartDate =
        !startDate || eventDate.isSameOrAfter(dayjs(startDate), 'day');
      const matchesEndDate =
        !endDate || eventDate.isSameOrBefore(dayjs(endDate), 'day');

      return (
        matchesType &&
        matchesExerciseType &&
        matchesName &&
        matchesStartDate &&
        matchesEndDate
      );
    });
  }

  findExerciseTypes(): string[] {
    return [...new Set(this.events.map((event) => event.type))];
  }

  findUniqueExerciseNames(): string[] {
    return [...new Set(this.events.map((event) => event.name))];
  }
}
