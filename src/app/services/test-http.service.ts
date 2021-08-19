import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Level } from '../constants/data-constants';
import { BASE_API_URL } from '../constants/route-constant';
import { SubmitTestResponse, TestContent, TestResult } from '../interfaces/test';

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
      .pipe(map((res) => res.results.filter((r) => r.testPassingDate)));
  }

  getAssignedTests(userId: string): Observable<TestResult[]> {
    return this.http
      .get<GetTestsResults>(`${BASE_API_URL}/Test?userId=${userId}`)
      .pipe(map((res) => res.results.filter((r) => !r.testPassingDate && r.assignmentEndDate)));
  }

  createTest(level: Level): Observable<TestContent> {
    return this.http.post<TestContent>(`${BASE_API_URL}/Test`, { level });
  }

  finishTest(
    testId: string,
    grammar: string[],
    listening: string[],
    writing: string,
    speaking: string,
  ): Observable<SubmitTestResponse> {
    return this.http.put<SubmitTestResponse>(`${BASE_API_URL}/Test/${testId}/submit`, {
      id: testId,
      grammarAnswers: grammar,
      auditionAnswers: listening,
      essayAnswer: writing,
      speakingAnswerReference: speaking,
    });
  }

  startAssignedTest(level: Level, testId: string): Observable<TestContent> {
    return this.http.put<TestContent>(`${BASE_API_URL}/Test/${testId}/start`, { level });
  }
}
