// src/calendar/calendar.module.ts
import { Module } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CalendarController } from './calendar.controller';
import { CalendarResolver } from './calendar.resolver';

@Module({
  providers: [CalendarService, CalendarResolver],
  controllers: [CalendarController],
})
export class CalendarModule {}
