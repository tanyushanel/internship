import { TestResult } from 'src/app/interfaces/result';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API_URL } from 'src/constants/route-constant';

@Injectable({
  providedIn: 'root',
})
export class UserResultsService {
  constructor(private http: HttpClient) {}

  getTestResults(): Observable<TestResult[]> {
    return this.http.get<TestResult[]>(BASE_API_URL);
  }
}
