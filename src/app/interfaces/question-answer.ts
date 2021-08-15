export interface Question {
  id: string;
  nameQuestion: string;
  level: number;
  auditionId: number;
  answerId: number;
  answers: AnswerQuestion[];
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
