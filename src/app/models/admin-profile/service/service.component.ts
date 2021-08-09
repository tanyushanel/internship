import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TestData } from '../../../../mocks/admin-profile-utils.mock';

const URL = '../../../assets/admin.json';

@Injectable({
  providedIn: 'root',
})
export class ServiceComponent {
  constructor(private readonly http: HttpClient) {}

  getData(): Observable<TestData[]> {
    return this.http.get<TestData[]>(URL);
  }

  postData(data: TestData): Observable<TestData> {
    // @ts-ignore
    return this.http
      .post<TestData>('http://httpbin.org/post', data)
      .toPromise()
      .then((cons) => console.log(cons));
  }
}
