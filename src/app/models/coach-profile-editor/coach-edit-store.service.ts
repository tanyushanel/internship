import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CoachEditHttpService } from '../../services/coach-edit-http.service';
import { QuestionList, UpdateQuestionList } from '../../interfaces/question-answer';

@Injectable({
  providedIn: 'root',
})
export class CoachEditStoreService {
  readonly question$ = new Subject();

  readonly questions$ = this.getAllQuestion();

  constructor(private readonly couchHttpService: CoachEditHttpService) {}

  getAllQuestion(): Observable<QuestionList[]> {
    return this.couchHttpService.getQuestionLists().pipe(map((res) => res.results));
  }

  getQuestion(id: string) {
    this.couchHttpService.getQuestion(id).subscribe({
      next: (question) => {
        this.question$.next(question);
      },
    });
  }

  setQuestions(question: UpdateQuestionList) {
    this.couchHttpService.updateQuestion(question).subscribe();
  }
}
