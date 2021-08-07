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
export interface AnswerQuestion {
  id: string;
  questionId: string;
  nameAnswer: string;
  isRight: boolean;
}
export interface QuestionList {
  id: string;
  questionNumber: string;
  numberTest: string;
  level: number;
  nameQuestion: string;
  creatorId: string;
  answers?: AnswerQuestion[];
  isEdit?: boolean;
}

export interface UpdateQuestionList {
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
  results: QuestionList[];
  rowCount: number;
}
