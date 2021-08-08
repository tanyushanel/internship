import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CoachTopicHttpService } from '../coach-topic-http.service';
import { CoachTopic } from '../../interfaces/essay-speaking';

@Injectable({
  providedIn: 'root',
})
export class CoachTopicStoreService {
  // readonly question$ = new Subject<CoachQuestion>();
  //
  readonly topics$ = new Subject<CoachTopic[]>();

  constructor(private readonly couchHttpService: CoachTopicHttpService) {}

  getAllTopic(): void {
    this.couchHttpService
      .getTopicList()
      .pipe(map((res) => res.results))
      .subscribe({
        next: (topic) => {
          this.topics$.next(topic);
        },
      });
  }
  //
  // getQuestion(id: string) {
  //   this.couchHttpService.getQuestion(id).subscribe({
  //     next: (question) => {
  //       this.question$.next(question);
  //     },
  //   });
  // }
  //
  // updateQuestion(question: UpdateCoachQuestion) {
  //   this.couchHttpService.updateQuestion(question).subscribe(() => this.getAllQuestion());
  // }
  //
  // createQuestion(question: UpdateCoachQuestion) {
  //   this.couchHttpService.createQuestion(question).subscribe(() => this.getAllQuestion());
  // }
}
