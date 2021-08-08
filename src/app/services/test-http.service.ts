import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Level } from '../constants/data-constants';
import { Test, TestContent } from '../interfaces/test';
import { BASE_API_URL } from '../constants/route-constant';

interface GetTestsResults {
  results: Test[];
}

@Injectable({
  providedIn: 'root',
})
export class TestHttpService {
  constructor(private http: HttpClient) {}

  getResults(userId: number): Observable<Test[]> {
    return this.http
      .get<GetTestsResults>(`${BASE_API_URL}/Test?userId=${userId}`)
      .pipe(map((res) => res.results.filter((r) => r.testPassingDate !== null)));
  }

  createTest(level: Level): Observable<TestContent> {
    return this.http.post<TestContent>(`${BASE_API_URL}/Test`, { level });
  }
}
