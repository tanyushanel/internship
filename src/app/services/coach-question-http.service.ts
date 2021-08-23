import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoachQuestion, ResponseGetAll, UpdateCoachQuestion } from '../interfaces/question-answer';
import { QuestionApiUrl } from '../constants/route-constant';

@Injectable({
  providedIn: 'root',
})
export class CoachQuestionHttpService {
  constructor(private readonly http: HttpClient) {}

  getQuestionLists() {
    return this.http.get<ResponseGetAll<CoachQuestion>>(QuestionApiUrl);
  }

  getQuestion(id: string | undefined) {
    return this.http.get<CoachQuestion>(`${QuestionApiUrl}/${id}`);
  }

  updateQuestion(question: UpdateCoachQuestion) {
    return this.http.put(`${QuestionApiUrl}/${question.id}`, question);
  }

  createQuestion(question: UpdateCoachQuestion) {
    return this.http.post(QuestionApiUrl, question);
  }

  deleteQuestion(id: string) {
    return this.http.delete(`${QuestionApiUrl}/${id}`);
  }
}
