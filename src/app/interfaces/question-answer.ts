import { Level } from '../../constants/data-constants';

export interface Question {
  id: number;
  questionText: string;
  auditionId: null;
  level: Level;
  creationDate: string;
}

export interface Answer {
  id: number;
  answerText: string;
  questionId: Question['id'];
  isRight: boolean;
}
