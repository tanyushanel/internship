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
    return (
      this.http
        // .get<GetTestsResult>(`${BASE_API_URL}/api/Test?userId=${userId}`)
        .get<GetTestsResult>(`${BASE_API_URL}/api/Test?userId=9d71d2fb-d63e-4fd6-8acf-08d955831c7b`)
        .pipe(map((res) => res.tests))
    );
  }
}
