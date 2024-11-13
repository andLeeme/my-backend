import { Injectable } from '@nestjs/common';
import { ExerciseCategory } from '../dto/exercise.dto';

@Injectable()
export class ExerciseService {
  private readonly exerciseData: ExerciseCategory[] = [
    {
      category: '웨이트',
      subcategories: [
        '벤치프레스',
        '데드리프트',
        '스쿼트',
        '밀리터리프레스',
        '바벨로우',
      ],
    },
    {
      category: '유산소',
      subcategories: ['러닝', '사이클', '스텝머신', '줄넘기', '로잉머신'],
    },
    {
      category: '코어',
      subcategories: [
        '플랭크',
        '러시안트위스트',
        '레그레이즈',
        '하이퍼익스텐션',
        '힙쓰러스트',
      ],
    },
    {
      category: '스트레칭',
      subcategories: [
        '햄스트링스트레칭',
        '어깨스트레칭',
        '고양이자세',
        '코브라자세',
        '토치터치',
      ],
    },
    {
      category: '요가',
      subcategories: [
        '태양경배',
        '전사자세',
        '나무자세',
        '비둘기자세',
        '브릿지포즈',
      ],
    },
    {
      category: '크로스핏',
      subcategories: ['버피', '월볼', '박스점프', '토바투바', '케틀벨스윙'],
    },
    {
      category: '체조',
      subcategories: ['턱걸이', '평행봉', '링머슬업', '풀오버', '핸드스탠드'],
    },
    {
      category: '전신운동',
      subcategories: ['버피', '마운틴클라이머', '버드독', '잭나이프', '벌크업'],
    },
    {
      category: '집중운동',
      subcategories: [
        '바이셉컬',
        '트라이셉딥',
        '레그컬',
        '숄더프레스',
        '사이드레터럴레이즈',
      ],
    },
    {
      category: '재활운동',
      subcategories: [
        '라텍스밴드운동',
        '밸런스운동',
        '무릎강화운동',
        '어깨재활운동',
        '발목스트레칭',
      ],
    },
  ];

  getAllCategories(): ExerciseCategory[] {
    return this.exerciseData;
  }

  getCategoryByName(category: string): ExerciseCategory | null {
    return this.exerciseData.find((item) => item.category === category) || null;
  }
}
