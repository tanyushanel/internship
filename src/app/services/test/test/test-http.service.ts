import { Test } from 'src/app/interfaces/test';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API_URL } from '../../../../constants/route-constant';

@Injectable({
  providedIn: 'root',
})
export class TestHttpService {
  constructor(private http: HttpClient) {}

  getTests(userId: number): Observable<Test[]> {
    return this.http.get<Test[]>(`${BASE_API_URL}/api/ApplicationUser/${userId}`);
  }
}
