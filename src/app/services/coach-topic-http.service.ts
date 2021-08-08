import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseGetAll } from '../interfaces/question-answer';
import { TopicApiUrl } from '../constants/route-constant';
import { CoachTopic } from '../interfaces/essay-speaking';

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

  updateTopic(topic: CoachTopic) {
    return this.http.put(`${TopicApiUrl}/${topic.id}`, topic);
  }

  createTopic(topic: CoachTopic) {
    return this.http.post(TopicApiUrl, topic);
  }

  //   deleteTopic(id:string){
  // return this.http.delete(TopicApiUrl, {id})
  //   }
}
