import { Module } from '@nestjs/common';
import { ExerciseController } from './exercise.controller';
import { ExerciseService } from './exercise.service';
import { ExerciseResolver } from './exercise.resolver';

@Module({
  controllers: [ExerciseController],
  providers: [ExerciseService, ExerciseResolver],
})
export class ExerciseModule {}
