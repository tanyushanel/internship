import { Level } from 'src/constants/data-constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Test } from '../interfaces/test';
import { BASE_API_URL } from '../../constants/route-constant';

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
      .get<GetTestsResults>(`${BASE_API_URL}/api/Test?userId=${userId}`)
      .pipe(map((res) => res.results.filter((r) => r.testPassingDate !== null)));
  }

  createTest(level: Level): Observable<Test> {
    return this.http.post<Test>(`${BASE_API_URL}/api/Test`, { level });
  }
}
