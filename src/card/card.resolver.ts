import { Query, Resolver } from '@nestjs/graphql';
import { CardService } from './card.service';
import { Card } from '../dto/card.dto';

@Resolver(() => Card)
export class CardResolver {
  constructor(private readonly cardService: CardService) {}

  @Query(() => [Card])
  getCards(): Card[] {
    return this.cardService.findAll();
  }
}
