import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseGetAll } from '../interfaces/question-answer';
import {
  DownloadFileListeningApiUrl,
  ListeningApiUrl,
  UploadFileListeningApiUrl,
} from '../constants/route-constant';
import {
  CoachListening,
  EditionCoachListening,
  UpdateCoachListening,
} from '../interfaces/audition';

@Injectable({
  providedIn: 'root',
})
export class CoachListeningHttpService {
  constructor(private readonly http: HttpClient) {}

  getListeningList() {
    return this.http.get<ResponseGetAll<CoachListening>>(ListeningApiUrl);
  }

  getListening(id: string) {
    return this.http.get<EditionCoachListening>(`${ListeningApiUrl}/${id}`);
  }

  updateListening(topic: UpdateCoachListening) {
    return this.http.put(`${ListeningApiUrl}/${topic.id}`, topic);
  }

  createListening(listening: UpdateCoachListening) {
    return this.http.post(ListeningApiUrl, listening);
  }

  deleteListening(id: string) {
    return this.http.delete(`${ListeningApiUrl}/${id}`);
  }

  uploadListeningFile(file: FormData) {
    return this.http.post(UploadFileListeningApiUrl, file);
  }

  downloadListeningFile() {
    return this.http.get(DownloadFileListeningApiUrl);
  }
}
