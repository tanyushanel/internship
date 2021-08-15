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

  updateListening(listen: UpdateCoachListening) {
    this.coachListeningHttpService.updateListening(listen).subscribe(() => this.getAllListening());
  }

  createListening(listen: any) {
    this.coachListeningHttpService.createListening(listen).subscribe(() => this.getAllListening());
  }

  deleteListening(id: string) {
    this.coachListeningHttpService.deleteListening(id).subscribe(() => this.getAllListening());
  }

  uploadListeningFile(file: File) {
    const fd = new FormData();
    fd.append('file', file);
    this.coachListeningHttpService.uploadListeningFile(fd).subscribe();
  }

  downloadListeningFile() {
    this.coachListeningHttpService.downloadListeningFile().subscribe();
  }
}
