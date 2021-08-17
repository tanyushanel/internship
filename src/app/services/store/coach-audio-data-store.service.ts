import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CoachListeningHttpService } from '../coach-listening-http.service';
import { PathFile } from '../../interfaces/audition';
import { CoachListeningStoreService } from './coach-listening-store.service';
import { DownloadFileListeningApiUrl } from '../../constants/route-constant';

@Injectable({
  providedIn: 'root',
})
export class CoachAudioDataStoreService {
  readonly audioFilePath$ = new Subject<PathFile>();

  audioData$ = new Subject<Blob>();

  constructor(
    private readonly coachListeningHttpService: CoachListeningHttpService,
    private readonly coachListeningStoreService: CoachListeningStoreService,
  ) {}

  uploadListeningFile(file: File) {
    const fd = new FormData();
    fd.append('formFiles', file);
    this.coachListeningHttpService.uploadListeningFile(fd).subscribe({
      next: (path) => {
        this.audioFilePath$.next(path);
      },
    });
  }

  downloadListeningFile() {
    this.coachListeningStoreService.listening$
      .pipe(
        map(async (res) => {
          const filePath = res.audioFilePath;
          const urlAudio = `${DownloadFileListeningApiUrl}?filePath=${filePath}`;
          const result = await fetch(urlAudio, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          return result.blob();
        }),
      )
      .subscribe({
        next: async (blob) => {
          this.audioData$.next(await blob);
        },
      });
  }
}
