import { Resolver, Query, Args } from '@nestjs/graphql';
import { ExerciseService } from './exercise.service';
import { ExerciseCategory } from '../dto/exercise.dto';

@Resolver(() => ExerciseCategory)
export class ExerciseResolver {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Query(() => [ExerciseCategory], { name: 'exerciseCategories' })
  getAllCategories() {
    return this.exerciseService.getAllCategories();
  }

  @Query(() => ExerciseCategory, { name: 'exerciseCategory', nullable: true })
  getCategoryByName(@Args('category', { type: () => String }) category: string) {
    return this.exerciseService.getCategoryByName(category);
  }
}
