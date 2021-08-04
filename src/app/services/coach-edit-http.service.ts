import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
export interface ResponseGetAllQuestion {
  currentPage: number;
  firstRowOnPage: number;
  lastRowOnPage: number;
  pageCount: number;
  pageSize: number;
  results: QuestionList[];
  rowCount: number;
}
@Injectable({
  providedIn: 'root',
})
export class CoachEditHttpService {
  constructor(private readonly http: HttpClient) {}

  getQuestionLists() {
    return this.http.get<ResponseGetAllQuestion>(
      'http://elevel-001-site1.btempurl.com/api/Question',
    );
  }

  getQuestion(id: string) {
    return this.http.get<QuestionList>(`http://elevel-001-site1.btempurl.com/api/Question/${id}`);
  }

  updateQuestion(question: any) {
    return this.http.put(`http://elevel-001-site1.btempurl.com/api/Question/${question.id}`, {
      question,
    });
  }
}
