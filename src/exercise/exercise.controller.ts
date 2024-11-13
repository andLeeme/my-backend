import { Controller, Get, Param } from '@nestjs/common';
import { ExerciseService } from './exercise.service';

@Controller('exercise')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get()
  getAllCategories() {
    return this.exerciseService.getAllCategories();
  }

  @Get(':category')
  getCategoryByName(@Param('category') category: string) {
    return this.exerciseService.getCategoryByName(category);
  }
}
