export interface Question {
  id: string;
  questionNumber: string;
  numberTest: string;
  level: number;
  nameQuestion: string;
  creatorId: string;
  answers?: AnswerQuestion[];
  isEdit?: boolean;
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
  results: Question[];
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
