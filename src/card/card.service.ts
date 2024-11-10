import { Injectable } from '@nestjs/common';
import { Card } from '../dto/card.dto';

@Injectable()
export class CardService {
  private readonly cards: Card[] = [
    {
      id: '1',
      img: 'https://image.url',
      tag: '프로바이오틱스',
      title: '락토핏 생유산균 골드',
      description: '장 건강을 위한 프로바이오틱스 제품.',
    },
    // 다른 카드 추가
  ];

  findAll(): Card[] {
    return this.cards;
  }
}
