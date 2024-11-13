import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ExerciseCategory {
  @Field()
  category: string;

  @Field(() => [String])
  subcategories: string[];
}
