import { Injectable } from '@angular/core';
import { MistakeReportHttpService } from '../mistake-report-http.service';
import { MistakeReport } from '../../interfaces/mistake-report';

@Injectable({
  providedIn: 'root',
})
export class MistakeReportStoreService {
  constructor(private readonly mistakeReportHttpService: MistakeReportHttpService) {}

  createMistakeReport(report: MistakeReport) {
    this.mistakeReportHttpService.createMistakeReport(report).subscribe();
  }
}
