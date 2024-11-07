// src/app.module.ts
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CalendarModule } from './calendar/calendar.module';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // 스키마 파일 자동 생성
      path: '/graphql', // 기본 GraphQL 엔드포인트 설정
    }),
    CalendarModule,
  ],
})
export class AppModule {}
