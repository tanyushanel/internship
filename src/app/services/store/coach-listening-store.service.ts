import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { TableData } from '../../interfaces/question-answer';
import { CoachListeningHttpService } from '../coach-listening-http.service';
import { CoachListening } from '../../interfaces/audition';

@Injectable({
  providedIn: 'root',
})
export class CoachTopicStoreService {
  readonly listen$ = new Subject<CoachListening>();

  readonly listens$ = new Subject<TableData[]>();

  constructor(private readonly coachListeningHttpService: CoachListeningHttpService) {}

  getAllListening(): void {
    this.coachListeningHttpService
      .getListeningList()
      .pipe(
        map((res) => res.results),
        map((listening) => {
          const table = listening.map((listen) => ({
            id: listen.id,
            creationDate: listen.creationDate,
            creatorId: listen.creatorId,
            level: listen.level,
            name: listen.questionNumber.toString(),
            number: listen.questionNumber,
          }));
          return table;
        }),
      )
      .subscribe({
        next: (listen) => {
          this.listens$.next(listen);
        },
      });
  }

  getListening(id: string) {
    this.coachListeningHttpService.getListening(id).subscribe({
      next: (listen) => {
        this.listen$.next(listen);
        this.getAllListening();
      },
    });
  }
  //
  // updateTopic(topic: CoachTopicUpdate) {
  //   this.couchHttpService.updateTopic(topic).subscribe(() => this.getAllTopic());
  // }
  //
  // createTopic(topic: CoachTopicUpdate) {
  //   this.couchHttpService.createTopic(topic).subscribe(() => this.getAllTopic());
  // }
  //
  // deleteTopic(id: string) {
  //   this.couchHttpService.deleteTopic(id).subscribe(() => this.getAllTopic());
  // }
}
