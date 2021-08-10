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

  // getResults(userId: string): Observable<TestResult[]> {
  //   return this.http
  //     .get<GetTestsResults>(`${BASE_API_URL}/Test?userId=${userId}`)
  //     .pipe(map((res) => res.results.filter((r) => r.testPassingDate !== null)));
  // }

  // getTestsAssigned(userId: string): Observable<TestResult[]> {
  //   return this.http
  //     .get<GetTestsResults>(`${BASE_API_URL}/Test?userId=${userId}`)
  //     .pipe(
  //       map((res) => res.results.filter((r) => !r.testPassingDate && r.assignmentEndDate !== null)),
  //     );
  // }

  createTest(level: Level): Observable<TestContent> {
    return this.http.post<TestContent>(`${BASE_API_URL}/Test`, { level });
  }

  // createAssignedTest(level: Level): Observable<TestContent> {
  //   // return this.http.post<TestContent>(`${BASE_API_URL}/Test/${testId}/start`, { level });
  // }

  // finishTest(testId: string) {
  //   return this.http.put<TestSubmit>(`${BASE_API_URL}/Test/{testId}/submit`, {
  //     id: testId,
  //     grammarAnswers,
  //     auditionAnswers,
  //     essayAnswer,
  //     speakingAnswerReference,
  //   });
  // }
}
