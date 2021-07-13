import { Level } from '../../constants/route-constant';

export interface QuizzModule {
  id: number;
  testId: number;
}

export interface Grammar {
  id: number;
  questionId: number;
  level: Level;
  creationDate: string;
}

export interface Audition {
  id: number;
  audioContent: string;
  questionId: number;
  level: Level;
  creationDate: string;
}
