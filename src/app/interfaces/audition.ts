import { Question } from './question-answer';
import { Level } from '../constants/data-constants';

export interface Audition {
  id: string;
  auditionAudio: string;
  level: Level;
  creationDate: string;
  questions: Question[];
}
