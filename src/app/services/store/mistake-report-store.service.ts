import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MistakeReportHttpService } from '../mistake-report-http.service';
import { MistakeReport, SendMistakeReport } from '../../interfaces/mistake-report';

@Injectable({
  providedIn: 'root',
})
export class MistakeReportStoreService {
  readonly mistakes$ = new Subject<MistakeReport[]>();

  constructor(private readonly mistakeReportHttpService: MistakeReportHttpService) {}

  createMistakeReport(report: SendMistakeReport) {
    this.mistakeReportHttpService.createMistakeReport(report).subscribe();
  }

  getGrammarMistake(): void {
    this.mistakeReportHttpService
      .getMistakeGrammarList()
      .subscribe({ next: (value) => this.mistakes$.next(value) });
  }

  getListeningMistake(): void {
    this.mistakeReportHttpService
      .getMistakeAuditionList()
      .subscribe({ next: (value) => this.mistakes$.next(value) });
  }

  getWritingAndSpeakingMistake(): void {
    this.mistakeReportHttpService
      .getMistakeTopicList()
      .subscribe({ next: (value) => this.mistakes$.next(value) });
  }
}
