import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Test } from '../../../interfaces/test';
import { BASE_API_URL } from '../../../../constants/route-constant';

interface GetTestsResult {
  tests: Test[];
}

@Injectable({
  providedIn: 'root',
})
export class TestHttpService {
  constructor(private http: HttpClient) {}

  getTests(userId: number): Observable<Test[]> {
    return this.http
      .get<GetTestsResult>(`${BASE_API_URL}/api/Test?userId=${userId}`)
      .pipe(map((res) => res.tests));
  }
}
