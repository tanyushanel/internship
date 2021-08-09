import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseGetAll } from '../interfaces/question-answer';
import { TopicApiUrl } from '../constants/route-constant';
import { CoachTopic, CoachTopicUpdate } from '../interfaces/coach-edit';

@Injectable({
  providedIn: 'root',
})
export class CoachTopicHttpService {
  constructor(private readonly http: HttpClient) {}

  getTopicList() {
    return this.http.get<ResponseGetAll<CoachTopic>>(TopicApiUrl);
  }

  getTopic(id: string) {
    return this.http.get<CoachTopic>(`${TopicApiUrl}/${id}`);
  }

  updateTopic(topic: CoachTopicUpdate) {
    return this.http.put(`${TopicApiUrl}/${topic.id}`, topic);
  }

  createTopic(topic: CoachTopicUpdate) {
    return this.http.post(TopicApiUrl, topic);
  }

  //   deleteTopic(id:string){
  // return this.http.delete(TopicApiUrl, {id})
  //   }
}
