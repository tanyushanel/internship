import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Level } from '../constants/data-constants';
import { Test } from '../interfaces/test';
import { BASE_API_URL } from '../constants/route-constant';
import { Question } from '../interfaces/question-answer';

interface GetTestsResults {
  results: Test[];
}

interface GetTestContent {
  grammarQuestions: Question[];
}

@Injectable({
  providedIn: 'root',
})
export class TestHttpService {
  constructor(private http: HttpClient) {}

  getResults(userId: number): Observable<Test[]> {
    return this.http
      .get<GetTestsResults>(`${BASE_API_URL}/api/Test?userId=${userId}`)
      .pipe(map((res) => res.results.filter((r) => r.testPassingDate !== null)));
  }

  createTest(level: Level): Observable<Test> {
    return this.http.post<Test>(`${BASE_API_URL}/api/Test`, { level });
  }
}
