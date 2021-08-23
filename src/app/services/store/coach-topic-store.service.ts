import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CoachTopicHttpService } from '../coach-topic-http.service';
import { CoachTopic, CoachTopicUpdate } from '../../interfaces/coach-edit';
import { TableData } from '../../interfaces/question-answer';

@Injectable({
  providedIn: 'root',
})
export class CoachTopicStoreService {
  readonly topic$ = new Subject<CoachTopic>();

  readonly topics$ = new Subject<TableData[]>();

  constructor(private readonly couchHttpService: CoachTopicHttpService) {}

  getAllTopic(): void {
    this.couchHttpService
      .getTopicList()
      .pipe(
        map((res) => res.results),
        map((topics) => {
          const table = topics.map((topic, i) => ({
            id: topic.id,
            creationDate: topic.creationDate,
            creatorId: topic.creatorId,
            creatorName: `${topic.creatorFirstName} ${topic.creatorLastName}`,
            level: topic.level,
            name: topic.topicName,
            number: i + 1,
          }));
          return table;
        }),
      )
      .subscribe({
        next: (topic) => {
          this.topics$.next(topic);
        },
      });
  }

  getTopic(id: string | undefined) {
    this.couchHttpService.getTopic(id).subscribe({
      next: (topic) => {
        this.topic$.next(topic);
        this.getAllTopic();
      },
    });
  }

  updateTopic(topic: CoachTopicUpdate) {
    this.couchHttpService.updateTopic(topic).subscribe(() => this.getAllTopic());
  }

  createTopic(topic: CoachTopicUpdate) {
    this.couchHttpService.createTopic(topic).subscribe(() => this.getAllTopic());
  }

  deleteTopic(id: string) {
    this.couchHttpService.deleteTopic(id).subscribe(() => this.getAllTopic());
  }
}
