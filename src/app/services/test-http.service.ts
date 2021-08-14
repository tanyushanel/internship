import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TestResult, TestContent } from '../interfaces/test';
import { Level } from '../constants/data-constants';

import { BASE_API_URL } from '../constants/route-constant';

interface GetTestsResults {
  results: TestResult[];
}

@Injectable({
  providedIn: 'root',
})
export class TestHttpService {
  constructor(private http: HttpClient) {}

  getAllTests(userId: string): Observable<TestResult[]> {
    return this.http
      .get<GetTestsResults>(`${BASE_API_URL}/Test?userId=${userId}`)
      .pipe(map((res) => res.results));
  }

  getResults(userId: string): Observable<TestResult[]> {
    return this.http
      .get<GetTestsResults>(`${BASE_API_URL}/Test?userId=${userId}`)
      .pipe(map((res) => res.results.filter((r) => r.testPassingDate !== null)));
  }

  getAllResults(userId: string): Observable<TestResult[]> {
    return this.http
      .get<GetTestsResults>(`${BASE_API_URL}/Test?userId=${userId}`)
      .pipe(map((res) => res.results.filter((r) => r.testPassingDate !== null)));
  }

  createTest(level: Level): Observable<TestContent> {
    return this.http.post<TestContent>(`${BASE_API_URL}/Test`, { level });
  }

  startAssignedTest(level: Level, testId: string): Observable<TestContent> {
    return this.http.put<TestContent>(`${BASE_API_URL}/Test/${testId}/start`, { level });
  }
}
