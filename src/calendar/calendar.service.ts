// src/calendar/calendar.service.ts
import { Injectable } from '@nestjs/common';
import { CalendarEvent } from '../dto/calendar.dto';

@Injectable()
export class CalendarService {
  private readonly events: CalendarEvent[] = [
    {
      title: "운동",
      start: new Date(2024, 9, 20, 10, 0),
      end: new Date(2024, 9, 20, 12, 0),
      category: "운동",
    },
    {
      title: "비타민 복용",
      start: new Date(2024, 9, 1, 10, 0),
      end: new Date(2024, 9, 1, 10, 0),
      category: "복용",
    },
    {
      title: "식단 계획",
      start: new Date(2024, 9, 14, 8, 0),
      end: new Date(2024, 9, 14, 10, 0),
      category: "식단",
    },
    {
      title: "정기 건강검진",
      start: new Date(2024, 9, 28, 10, 0),
      end: new Date(2024, 9, 28, 11, 0),
      category: "건강검진",
    },
    {
      title: "운동",
      start: new Date(2024, 10, 1, 10, 0),
      end: new Date(2024, 10, 1, 11, 10),
      category: "운동",
    },
    {
      title: "운동",
      start: new Date(2024, 10, 2, 10, 0),
      end: new Date(2024, 10, 2, 12, 0),
      category: "운동",
    },
    {
      title: "운동",
      start: new Date(2024, 10, 3, 10, 0),
      end: new Date(2024, 10, 3, 11, 10),
      category: "운동",
    },
    {
      title: "운동",
      start: new Date(2024, 10, 4, 10, 0),
      end: new Date(2024, 10, 4, 11, 10),
      category: "운동",
    },
    {
      title: "운동",
      start: new Date(2024, 10, 7, 10, 0),
      end: new Date(2024, 10, 7, 12, 0),
      category: "운동",
    },
    {
      title: "운동",
      start: new Date(2024, 10, 10, 10, 0),
      end: new Date(2024, 10, 10, 11, 10),
      category: "운동",
    },
    {
      title: "운동",
      start: new Date(2024, 10, 11, 10, 0),
      end: new Date(2024, 10, 11, 12, 0),
      category: "운동",
    },
    {
      title: "운동",
      start: new Date(2024, 10, 12, 10, 0),
      end: new Date(2024, 10, 12, 13, 0),
      category: "운동",
    },
    {
      title: "비타민 복용",
      start: new Date(2024, 10, 8, 10, 0),
      end: new Date(2024, 10, 8, 10, 0),
      category: "복용",
    },
    {
      title: "식단 계획",
      start: new Date(2024, 10, 17, 8, 0),
      end: new Date(2024, 10, 17, 10, 0),
      category: "식단",
    },
    {
      title: "정기 건강검진",
      start: new Date(2024, 10, 20, 10, 0),
      end: new Date(2024, 10, 20, 11, 0),
      category: "건강검진",
    },
  ];

  findAll(year?: number, month?: number): CalendarEvent[] {
    return this.events.filter(event => {
      const eventDate = new Date(event.start);
      return (
        (!year || eventDate.getFullYear() === year) &&
        (!month || eventDate.getMonth() + 1 === month)
      );
    });
  }
}