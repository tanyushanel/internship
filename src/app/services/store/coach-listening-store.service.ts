import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { TableData } from '../../interfaces/question-answer';
import { CoachListeningHttpService } from '../coach-listening-http.service';
import { EditionCoachListening, UpdateCoachListening } from '../../interfaces/audition';

@Injectable({
  providedIn: 'root',
})
export class CoachListeningStoreService {
  readonly listening$ = new Subject<EditionCoachListening>();

  readonly listenings$ = new Subject<TableData[]>();

  constructor(private readonly coachListeningHttpService: CoachListeningHttpService) {}

  getAllListening(): void {
    this.coachListeningHttpService
      .getListeningList()
      .pipe(
        map((res) => res.results),
        map((listening) => {
          const table = listening.map((listen, i) => ({
            id: listen.id,
            creationDate: listen.creationDate,
            creatorId: listen.creatorId,
            level: listen.level,
            name: 'Audition',
            number: listen.questionNumber || i + 1,
          }));
          return table;
        }),
      )
      .subscribe({
        next: (listen) => {
          this.listenings$.next(listen);
        },
      });
  }

  getListening(id: string) {
    this.coachListeningHttpService.getListening(id).subscribe({
      next: (listen) => {
        this.listening$.next(listen);
        this.getAllListening();
      },
    });
  }

  updateListening(listen: UpdateCoachListening) {
    this.coachListeningHttpService.updateListening(listen).subscribe(() => this.getAllListening());
  }

  createListening(listen: any) {
    this.coachListeningHttpService.createListening(listen).subscribe(() => this.getAllListening());
  }

  deleteListening(id: string) {
    this.coachListeningHttpService.deleteListening(id).subscribe(() => this.getAllListening());
  }
}
