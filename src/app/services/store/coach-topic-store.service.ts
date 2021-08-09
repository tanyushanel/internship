import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CoachTopicHttpService } from '../coach-topic-http.service';
import { CoachTopic, CoachTopicUpdate } from '../../interfaces/coach-edit';

@Injectable({
  providedIn: 'root',
})
export class CoachTopicStoreService {
  readonly topic$ = new Subject<CoachTopic>();

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

  getTopic(id: string) {
    this.couchHttpService.getTopic(id).subscribe({
      next: (topic) => {
        this.topic$.next(topic);
      },
    });
  }

  updateQuestion(topic: CoachTopicUpdate) {
    this.couchHttpService.updateTopic(topic).subscribe(() => this.getAllTopic());
  }

  createQuestion(topic: CoachTopicUpdate) {
    this.couchHttpService.createTopic(topic).subscribe(() => this.getAllTopic());
  }
}
