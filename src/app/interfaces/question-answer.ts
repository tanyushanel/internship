// eslint-disable-next-line import/no-cycle
import { Level } from '../constants/data-constants';

export interface Question {
  id: number;
  nameQuestion: string;
  level: Level;
  auditionId: number;
  answerId: number;
  answers: Answer[];
}
export interface CoachQuestion {
  id: string;
  questionNumber: string;
  numberTest: string;
  level: number;
  nameQuestion: string;
  creatorId: string;
  answers?: AnswerQuestion[];
  isEdit?: boolean;
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

export interface ResponseGetAllQuestion {
  currentPage: number;
  firstRowOnPage: number;
  lastRowOnPage: number;
  pageCount: number;
  pageSize: number;
  results: CoachQuestion[];
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
