import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TestData } from 'src/interfaces/admin.interfaces';

const URL = '../assets/admin.json';

@Injectable({
  providedIn: 'root',
})
export class ServiceComponent {
  constructor(private readonly http: HttpClient) {}

  getData(): Observable<TestData[]> {
    return this.http.get<TestData[]>(URL);
  }

  postData(data: TestData): Observable<TestData> {
    return this.http.post<TestData>(URL, data);
  }
}
