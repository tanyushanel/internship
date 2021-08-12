import { TestStoreService } from 'src/app/services/store/test-store.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Level } from '../constants/data-constants';
import { TestResult, TestContent, TestSubmit } from '../interfaces/test';
import { BASE_API_URL } from '../constants/route-constant';

interface GetTestsResults {
  results: TestResult[];
}

@Injectable({
  providedIn: 'root',
})
export class TestHttpService {
  constructor(private http: HttpClient) {}

  getResults(userId: string): Observable<TestResult[]> {
    return this.http
      .get<GetTestsResults>(`${BASE_API_URL}/Test?userId=${userId}`)
      .pipe(map((res) => res.results.filter((r) => r.testPassingDate !== null)));
  }

  getAssignedTests(userId: string): Observable<TestResult[]> {
    return this.http
      .get<GetTestsResults>(`${BASE_API_URL}/Test?userId=${userId}`)
      .pipe(
        map((res) => res.results.filter((r) => !r.testPassingDate && r.assignmentEndDate !== null)),
      );
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
  ) {
    return this.http.put<TestSubmit>(`${BASE_API_URL}/Test/${testId}/submit`, {
      id: testId,
      grammarAnswers: grammar,
      auditionAnswers: listening,
      essayAnswer: writing,
      speakingAnswerReference: speaking,
    });
  }
}
