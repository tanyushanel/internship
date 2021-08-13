import { Question } from '../constants/mock-grammar-test';
import { Level } from '../constants/data-constants';

export interface CoachListening {
  id: string;
  level: number;
  creatorId: string;
  creationDate: string;
  questionNumber: number;
}

export interface Audition {
  id: number;
  auditionAudio: string;
  level: Level;
  creationDate: string;
  questions: Question[];
}

interface AnswerListeningQuestion {
  id: string;
  nameAnswer: string;
  isRight: boolean;
}

export interface ListeningQuestion {
  id: string;
  nameQuestion: string;
  level: number;
  answers: AnswerListeningQuestion[];
}

export interface EditionCoachListening {
  id: string;
  auditionNumber: number;
  audioFilePath: string;
  level: number;
  isEdit?: boolean;
  creationDate: string;
  creatorId: string;
  questions: ListeningQuestion[];
}
