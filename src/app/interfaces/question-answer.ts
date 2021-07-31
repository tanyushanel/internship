import { Level } from '../../constants/data-constants';

export interface Question {
  id: number;
  text: string;
  level: Level;
  auditionId: number;
  answerId: number;
  answers: Answer[];
}

export interface Answer {
  id: number;
  text: string;
  questionId: Question['id'];
  isRight: boolean;
}
