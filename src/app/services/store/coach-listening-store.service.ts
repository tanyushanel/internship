import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { TableData } from '../../interfaces/question-answer';
import { CoachListeningHttpService } from '../coach-listening-http.service';
import { EditionCoachListening } from '../../interfaces/audition';

@Injectable({
  providedIn: 'root',
})
export class CoachListeningStoreService {
  readonly listen$ = new Subject<EditionCoachListening>();

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
            name: '',
            number: listen.questionNumber,
          }));
          return table;
        }),
      )
      .subscribe({
        next: (listen) => {
          this.listens$.next(listen);
          console.log(listen);
        },
      });
  }

  getListening(id: string) {
    this.coachListeningHttpService.getListening(id).subscribe({
      next: (listen) => {
        this.listen$.next(listen);
        console.log(listen);
        this.getAllListening();
      },
    });
  }

  updateListening(listen: any) {
    this.coachListeningHttpService.updateListening(listen).subscribe(() => this.getAllListening());
  }

  createListening(listen: any) {
    this.coachListeningHttpService.createListening(listen).subscribe(() => this.getAllListening());
  }

  deleteListening(id: string) {
    this.coachListeningHttpService.deleteListening(id).subscribe(() => this.getAllListening());
  }

  uploadListeningFile(file: any) {
    this.coachListeningHttpService.uploadListeningFile(file);
  }

  downloadListeningFile(file: any) {
    this.coachListeningHttpService.uploadListeningFile(file);
  }
}
