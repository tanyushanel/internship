import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CoachQuestionHttpService } from '../coach-question-http.service';
import { QuestionList, UpdateQuestionList } from '../../interfaces/question-answer';

@Injectable({
  providedIn: 'root',
})
export class CoachQuestionStoreService {
  readonly question$ = new Subject<QuestionList>();

  readonly questions$ = new Subject<QuestionList[]>();

  constructor(private readonly couchHttpService: CoachQuestionHttpService) {}

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

  updateQuestion(question: UpdateQuestionList) {
    this.couchHttpService.updateQuestion(question).subscribe();
  }

  createQuestion(question: UpdateQuestionList) {
    this.couchHttpService.createQuestion(question).subscribe();
  }
}
