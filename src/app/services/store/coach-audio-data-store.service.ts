import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CoachListeningHttpService } from '../coach-listening-http.service';
import { PathFile } from '../../interfaces/audition';
import { CoachListeningStoreService } from './coach-listening-store.service';
import { DownloadFileListeningApiUrl } from '../../constants/route-constant';
import { TestStoreService } from './test-store.service';
import { CoachTestsStoreService } from '../../models/coach-profile/service/coach-tests-store.service';
import { AuthStoreService } from './auth-store.service';

@Injectable({
  providedIn: 'root',
})
export class CoachAudioDataStoreService {
  readonly audioFilePath$ = new Subject<PathFile>();

  audioData$ = new Subject<Blob>();

  imgData$ = new Subject<Blob>();

  constructor(
    private readonly testStoreService: TestStoreService,
    private readonly coachListeningHttpService: CoachListeningHttpService,
    private readonly coachListeningStoreService: CoachListeningStoreService,
    private readonly coachCheckService: CoachTestsStoreService,
    private readonly userService: AuthStoreService,
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

  async fetchUrlAudio(audioPath: string = ''): Promise<Blob> {
    const urlAudio = audioPath && `${DownloadFileListeningApiUrl}?filePath=${audioPath}`;
    const result = await fetch(urlAudio, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return result.blob();
  }

  downloadListeningFile() {
    this.coachListeningStoreService.listening$
      .pipe(
        map(async (res) => {
          return this.fetchUrlAudio(res.audioFilePath);
        }),
      )
      .subscribe({
        next: async (blob) => {
          this.audioData$.next(await blob);
        },
      });
  }

  downloadAudio() {
    this.coachCheckService.coachTestResults$
      .pipe(
        map((res) => res?.find((id) => id)),
        map((user) => this.fetchUrlAudio(user?.speakingAnswerReference as string)),
      )
      .subscribe({
        next: async (blob) => {
          this.audioData$.next(await blob);
        },
      });
  }

  downloadTestListening() {
    this.testStoreService.test$
      .pipe(
        take(1),
        map((res) => {
          return this.fetchUrlAudio(res?.audition.audioFilePath as string);
        }),
      )
      .subscribe({
        next: async (blob) => {
          this.audioData$.next(await blob);
        },
      });
  }

  downloadAvatar() {
    this.userService.activeUser$
      .pipe(
        map((res) => {
          return this.fetchUrlAudio(res?.avatar as string);
        }),
      )
      .subscribe({
        next: async (blob) => {
          this.imgData$.next(await blob);
        },
      });
  }
}
