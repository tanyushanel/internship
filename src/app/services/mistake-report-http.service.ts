import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MistakeReport } from '../interfaces/mistake-report';
import { MistakeReportApiUrl } from '../constants/route-constant';

@Injectable({
  providedIn: 'root',
})
export class MistakeReportHttpService {
  constructor(private readonly http: HttpClient) {}

  createMistakeReport(report: MistakeReport) {
    return this.http.post(MistakeReportApiUrl, report);
  }
}
