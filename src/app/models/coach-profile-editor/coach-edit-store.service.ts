import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CoachEditHttpService } from '../../services/coach-edit-http.service';
import { QuestionList, UpdateQuestionList } from '../../interfaces/question-answer';

@Injectable({
  providedIn: 'root',
})
export class CoachEditStoreService {
  readonly question$ = new Subject<QuestionList>();

  readonly questions$ = new Subject<QuestionList[]>();

  constructor(private readonly couchHttpService: CoachEditHttpService) {}

  getAllQuestion(): void {
    this.couchHttpService
      .getQuestionLists()
      .pipe(map((res) => res.results))
      .subscribe({
        next: (questions) => {
          this.questions$.next(questions);
        },
      });
  }

  getQuestion(id: string) {
    this.couchHttpService.getQuestion(id).subscribe({
      next: (question) => {
        this.question$.next(question);
      },
    });
  }

  updateQuestions(question: UpdateQuestionList) {
    this.couchHttpService.updateQuestion(question).subscribe();
  }
}
