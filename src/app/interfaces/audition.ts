// eslint-disable-next-line import/no-cycle
import { Level } from '../constants/data-constants';
// eslint-disable-next-line import/no-cycle
import { Question } from './question-answer';

export interface CoachListening {
  id: string;
  level: number;
  creatorId: string;
  creationDate: string;
  questionNumber: number;
}

export interface Audition {
  id: string;
  audioFilePath?: string;
  level: Level;
  creationDate: string;
  questions: Question[];
}

interface AnswerListeningQuestion {
  id?: string;
  nameAnswer: string;
  isRight: boolean;
}

export interface ListeningQuestion {
  id: string;
  nameQuestion: string;
  level?: number;
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
export interface UpdateCoachListening {
  id: string | undefined;
  audioFilePath: string | undefined;
  level: number | undefined;
  questions: ListeningQuestion[];
}

export interface PathFile {
  pathfile: string;
}
