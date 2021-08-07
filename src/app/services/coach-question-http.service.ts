import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  CoachQuestion,
  ResponseGetAllQuestion,
  UpdateQuestionList,
} from '../interfaces/question-answer';
import { QuestionApiUrl } from '../constants/route-constant';

@Injectable({
  providedIn: 'root',
})
export class CoachQuestionHttpService {
  constructor(private readonly http: HttpClient) {}

  getQuestionLists() {
    return this.http.get<ResponseGetAllQuestion>(QuestionApiUrl);
  }

  getQuestion(id: string) {
    return this.http.get<CoachQuestion>(`${QuestionApiUrl}/${id}`);
  }

  updateQuestion(question: UpdateQuestionList) {
    return this.http.put(`${QuestionApiUrl}/${question.id}`, question);
  }

  createQuestion(question: UpdateQuestionList) {
    return this.http.post(QuestionApiUrl, question);
  }
}
