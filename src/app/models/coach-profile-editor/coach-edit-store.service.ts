import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CoachEditHttpService, QuestionList } from '../../services/coach-edit-http.service';

@Injectable({
  providedIn: 'root',
})
export class CoachEditStoreService {
  initialQuestion = null;

  private readonly question$ = new BehaviorSubject<QuestionList | null>(this.initialQuestion);

  readonly activeQuestion$ = this.question$.asObservable();

  private get question() {
    return this.question$.getValue();
  }

  private set question(question) {
    this.question$.next(question);
  }

  constructor(private readonly couchHttpService: CoachEditHttpService) {}

  getAllQuestion(): Observable<QuestionList[]> {
    return this.couchHttpService.getQuestionLists().pipe(map((res) => res.results));
  }

  getQuestion(id: string) {
    this.couchHttpService.getQuestion(id).subscribe({
      next: (question) => {
        this.question = { ...question };
      },
    });
  }

  setQuestions(question: any) {
    this.couchHttpService.updateQuestion(question).subscribe();
  }
}
