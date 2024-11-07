import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { CardResolver } from './card.resolver';

@Module({
  providers: [CardService, CardResolver],
  controllers: [CardController],
})
export class CardModule {}
