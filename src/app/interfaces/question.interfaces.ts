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
