import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CoachQuestionHttpService } from '../coach-question-http.service';
import { CoachQuestion, UpdateCoachQuestion } from '../../interfaces/question-answer';

@Injectable({
  providedIn: 'root',
})
export class CoachQuestionStoreService {
  readonly question$ = new Subject<CoachQuestion>();

  readonly questions$ = new Subject<CoachQuestion[]>();

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

  updateQuestion(question: UpdateCoachQuestion) {
    this.couchHttpService.updateQuestion(question).subscribe(() => this.getAllQuestion());
  }

  createQuestion(question: UpdateCoachQuestion) {
    this.couchHttpService.createQuestion(question).subscribe();
  }
}
