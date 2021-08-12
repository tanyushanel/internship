import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseGetAll } from '../interfaces/question-answer';
import { ListeningApiUrl } from '../constants/route-constant';
import { CoachListening } from '../interfaces/audition';

@Injectable({
  providedIn: 'root',
})
export class CoachListeningHttpService {
  constructor(private readonly http: HttpClient) {}

  getListeningList() {
    return this.http.get<ResponseGetAll<CoachListening>>(ListeningApiUrl);
  }

  getListening(id: string) {
    return this.http.get<CoachListening>(`${ListeningApiUrl}/${id}`);
  }

  updateListening(topic: CoachListening) {
    return this.http.put(`${ListeningApiUrl}/${topic.id}`, topic);
  }

  createListening(topic: CoachListening) {
    return this.http.post(ListeningApiUrl, topic);
  }

  deleteListening(id: string) {
    return this.http.delete(`${ListeningApiUrl}/${id}`);
  }
}
