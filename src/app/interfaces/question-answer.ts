import { Level } from '../constants/data-constants';

export interface Question {
  id: number;
  nameQuestion: string;
  level: Level;
  auditionId: number;
  answerId: number;
  answers: Answer[];
}

export interface Answer {
  id: number;
  nameAnswer: string;
  questionId: Question['id'];
  isRight: boolean;
}
