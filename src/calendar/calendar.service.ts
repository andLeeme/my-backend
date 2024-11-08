// src/calendar/calendar.service.ts
import { Injectable } from '@nestjs/common';
import { CalendarEvent } from '../dto/calendar.dto';

@Injectable()
export class CalendarService {
  private readonly events: CalendarEvent[] = [
    {
      exerciseRecordId: 1,
      memberName: "홍길동",
      exerciseName: "런닝",
      exerciseDate: "2024-10-20 10:00:00",
      exerciseCount: 5,
      exerciseTime: "01:30:00",
      category: "운동"
    },
    {
      exerciseRecordId: 2,
      memberName: "이순신",
      exerciseName: "자전거 타기",
      exerciseDate: "2024-10-21 09:00:00",
      exerciseCount: 3,
      exerciseTime: "00:45:00",
      category: "운동"
    },
    {
      exerciseRecordId: 3,
      memberName: "김유신",
      exerciseName: "수영",
      exerciseDate: "2024-10-22 08:00:00",
      exerciseCount: 10,
      exerciseTime: "01:15:00",
      category: "운동"
    },
    {
      exerciseRecordId: 4,
      memberName: "강감찬",
      exerciseName: "조깅",
      exerciseDate: "2024-10-23 07:30:00",
      exerciseCount: 7,
      exerciseTime: "01:00:00",
      category: "운동"
    },
    {
      exerciseRecordId: 5,
      memberName: "장보고",
      exerciseName: "근력 운동",
      exerciseDate: "2024-10-24 06:45:00",
      exerciseCount: 4,
      exerciseTime: "00:40:00",
      category: "운동"
    },
    {
      exerciseRecordId: 6,
      memberName: "유관순",
      exerciseName: "요가",
      exerciseDate: "2024-10-25 06:30:00",
      exerciseCount: 1,
      exerciseTime: "00:30:00",
      category: "운동"
    },
    {
      exerciseRecordId: 7,
      memberName: "안중근",
      exerciseName: "등산",
      exerciseDate: "2024-10-26 10:00:00",
      exerciseCount: 2,
      exerciseTime: "02:30:00",
      category: "운동"
    },
    {
      exerciseRecordId: 8,
      memberName: "김구",
      exerciseName: "런닝",
      exerciseDate: "2024-10-27 07:00:00",
      exerciseCount: 6,
      exerciseTime: "01:10:00",
      category: "운동"
    },
    {
      exerciseRecordId: 9,
      memberName: "정약용",
      exerciseName: "웨이트 트레이닝",
      exerciseDate: "2024-10-28 05:30:00",
      exerciseCount: 3,
      exerciseTime: "01:20:00",
      category: "운동"
    },
    {
      exerciseRecordId: 10,
      memberName: "세종대왕",
      exerciseName: "스트레칭",
      exerciseDate: "2024-10-29 08:00:00",
      exerciseCount: 1,
      exerciseTime: "00:20:00",
      category: "운동"
    },
    {
      exerciseRecordId: 11,
      memberName: "광개토대왕",
      exerciseName: "자전거 타기",
      exerciseDate: "2024-10-30 09:00:00",
      exerciseCount: 5,
      exerciseTime: "01:00:00",
      category: "운동"
    },
    {
      exerciseRecordId: 12,
      memberName: "문익점",
      exerciseName: "조깅",
      exerciseDate: "2024-11-01 06:00:00",
      exerciseCount: 3,
      exerciseTime: "00:50:00",
      category: "운동"
    },
    {
      exerciseRecordId: 13,
      memberName: "허준",
      exerciseName: "런닝",
      exerciseDate: "2024-11-02 07:15:00",
      exerciseCount: 4,
      exerciseTime: "01:05:00",
      category: "운동"
    },
    {
      exerciseRecordId: 14,
      memberName: "장영실",
      exerciseName: "수영",
      exerciseDate: "2024-11-03 10:30:00",
      exerciseCount: 8,
      exerciseTime: "01:30:00",
      category: "운동"
    },
    {
      exerciseRecordId: 15,
      memberName: "신사임당",
      exerciseName: "요가",
      exerciseDate: "2024-11-04 06:45:00",
      exerciseCount: 1,
      exerciseTime: "00:40:00",
      category: "운동"
    },
    {
      exerciseRecordId: 16,
      memberName: "율곡 이이",
      exerciseName: "웨이트 트레이닝",
      exerciseDate: "2024-11-05 05:30:00",
      exerciseCount: 4,
      exerciseTime: "01:15:00",
      category: "운동"
    },
    {
      exerciseRecordId: 17,
      memberName: "황진이",
      exerciseName: "런닝",
      exerciseDate: "2024-11-06 08:00:00",
      exerciseCount: 3,
      exerciseTime: "00:55:00",
      category: "운동"
    },
    {
      exerciseRecordId: 18,
      memberName: "이황",
      exerciseName: "등산",
      exerciseDate: "2024-11-07 10:00:00",
      exerciseCount: 2,
      exerciseTime: "02:00:00",
      category: "운동"
    },
    {
      exerciseRecordId: 19,
      memberName: "정몽주",
      exerciseName: "자전거 타기",
      exerciseDate: "2024-11-08 09:30:00",
      exerciseCount: 6,
      exerciseTime: "01:20:00",
      category: "운동"
    },
    {
      exerciseRecordId: 20,
      memberName: "신채호",
      exerciseName: "조깅",
      exerciseDate: "2024-11-09 07:00:00",
      exerciseCount: 7,
      exerciseTime: "01:10:00",
      category: "운동"
    },
    {
      exerciseRecordId: 21,
      memberName: "최영",
      exerciseName: "근력 운동",
      exerciseDate: "2024-11-10 06:30:00",
      exerciseCount: 5,
      exerciseTime: "00:50:00",
      category: "운동"
    }
  ];

  findAll(year?: number, month?: number): CalendarEvent[] {
    return this.events.filter(event => {
      const eventDate = new Date(event.exerciseDate);
      return (
        (!year || eventDate.getFullYear() === year) &&
        (!month || eventDate.getMonth() + 1 === month)
      );
    });
  }
  
}
