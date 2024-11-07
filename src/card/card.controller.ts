import { Controller, Get } from '@nestjs/common';
import { CardService } from './card.service';
import { Card } from '../dto/card.dto';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  findAll(): Card[] {
    return this.cardService.findAll();
  }
}
