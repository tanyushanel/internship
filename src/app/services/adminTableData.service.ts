import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestData } from '../../mocks/admin-profile-utils.mock';

@Injectable({
  providedIn: 'root',
})
export class AdminHttpService {
  constructor(private readonly http: HttpClient) {}

  getAdminTests() {
    return this.http.get<TestData[]>('http://elevel-001-site1.btempurl.com/api/Test/forAdmin');
  }

  passAdminTest(test: TestData) {
    return this.http.post<TestData[]>(
      'http://elevel-001-site1.btempurl.com/api/Test/forAdmin',
      test,
    );
  }
}
