// src/calendar/calendar.service.ts
import { Injectable } from '@nestjs/common';
import { CalendarEvent } from '../dto/calendar.dto';
import { EXERCISE_DATA } from '../data/exerciseData';

@Injectable()
export class CalendarService {
  private readonly events: CalendarEvent[] = EXERCISE_DATA;

  findAll(year?: number, month?: number): CalendarEvent[] {
    return this.events.filter((event) => {
      const eventDate = new Date(event.exerciseDate);
      return (
        (!year || eventDate.getFullYear() === year) &&
        (!month || eventDate.getMonth() + 1 === month)
      );
    });
  }

  findByParams(memberName?: string, exerciseName?: string): CalendarEvent[] {
    return this.events.filter((event) => {
      return (
        (!memberName || event.memberName === memberName) &&
        (!exerciseName || event.exerciseName === exerciseName)
      );
    });
  }

  findExerciseTypes(): string[] {
    return [...new Set(this.events.map((event) => event.exerciseType))];
  }

  findUniqueExerciseNames(): string[] {
    return [...new Set(this.events.map((event) => event.exerciseName))];
  }
}
