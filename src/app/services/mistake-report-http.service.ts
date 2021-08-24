import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {
  MistakeGrammarReport,
  MistakeListeningReport,
  MistakeWritingOrSpeakingReport,
  SendMistakeReport,
} from '../interfaces/mistake-report';
import { MistakeReportApiUrl } from '../constants/route-constant';
import { ResponseGetAll } from '../interfaces/question-answer';

@Injectable({
  providedIn: 'root',
})
export class MistakeReportHttpService {
  constructor(private readonly http: HttpClient) {}

  createMistakeReport(report: SendMistakeReport) {
    return this.http.post(MistakeReportApiUrl, report);
  }

  getMistakeAuditionList() {
    return this.http.get<ResponseGetAll<MistakeListeningReport>>(MistakeReportApiUrl).pipe(
      map((res) => {
        return res.results.filter((r) => r.auditionId !== null);
      }),
    );
  }

  getMistakeGrammarList() {
    return this.http.get<ResponseGetAll<MistakeGrammarReport>>(MistakeReportApiUrl).pipe(
      map((res) => {
        return res.results.filter((r) => r.questionId !== null);
      }),
    );
  }

  getMistakeTopicList() {
    return this.http.get<ResponseGetAll<MistakeWritingOrSpeakingReport>>(MistakeReportApiUrl).pipe(
      map((res) => {
        return res.results.filter((r) => r.topicId !== null);
      }),
    );
  }
}
