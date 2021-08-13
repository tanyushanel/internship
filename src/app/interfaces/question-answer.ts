// eslint-disable-next-line import/no-cycle
import { Level } from '../constants/data-constants';

export interface Question {
  id: number;
  nameQuestion: string | null;
  level: Level;
  auditionId: number;
  answerId: number;
  answers: Answer[];
}
export interface CoachQuestion {
  id: string;
  level: number;
  creatorId: string;
  numberTest: string;
  creationDate: string;
  questionNumber: number;
  nameQuestion: string;
  isEdit?: boolean;
  answers?: AnswerQuestion[];
}
export interface TableData {
  id: string;
  creationDate: string;
  creatorId: string;
  level: number;
  name: string;
  number: number;
}

export interface Answer {
  id: number;
  nameAnswer: string;
  questionId: Question['id'];
  isRight: boolean;
}

export interface AnswerQuestion {
  id: string;
  questionId: string;
  nameAnswer: string;
  isRight: boolean;
}

export interface UpdateCoachQuestion {
  id: string;
  nameQuestion: string;
  level: number | undefined;
  answers: AnswerQuestion[] | undefined;
}

export interface ResponseGetAll<T> {
  currentPage: number;
  firstRowOnPage: number;
  lastRowOnPage: number;
  pageCount: number;
  pageSize: number;
  results: T[];
  rowCount: number;
}
interface EmptyAnswer {
  nameAnswer: string;
  isRight: boolean;
}
export interface EmptyQuestion {
  level: number;
  nameQuestion: string;
  answers: EmptyAnswer[];
}
