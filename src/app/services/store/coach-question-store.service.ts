import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CoachQuestionHttpService } from '../coach-question-http.service';
import { CoachQuestion, TableData, UpdateCoachQuestion } from '../../interfaces/question-answer';

@Injectable({
  providedIn: 'root',
})
export class CoachQuestionStoreService {
  readonly question$ = new Subject<CoachQuestion>();

  readonly questions$ = new Subject<TableData[]>();

  constructor(private readonly couchHttpService: CoachQuestionHttpService) {}

  getAllQuestion(): void {
    this.couchHttpService
      .getQuestionLists()
      .pipe(
        map((res) => res.results),
        map((questions) => {
          const table = questions.map((question) => ({
            id: question.id,
            creationDate: question.creationDate,
            creatorId: question.creatorId,
            creatorName: `${question.creatorFirstName} ${question.creatorLastName}`,
            level: question.level,
            name: question.nameQuestion,
            number: question.questionNumber,
          }));
          return table;
        }),
      )
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
    this.couchHttpService.createQuestion(question).subscribe(() => this.getAllQuestion());
  }

  deleteQuestion(id: string) {
    this.couchHttpService.deleteQuestion(id).subscribe(() => this.getAllQuestion());
  }
}
