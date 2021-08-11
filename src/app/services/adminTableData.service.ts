import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceCoachData, ServiceTestData, TestData } from 'src/mocks/admin-profile-utils.mock';

@Injectable({
  providedIn: 'root',
})
export class AdminHttpService {
  constructor(private readonly http: HttpClient) {}

  getAdminTests() {
    return this.http.get<ServiceTestData>(
      'http://elevel-001-site1.btempurl.com/api/Test/forAdmin?PageSize=100000',
    );
  }

  getAdminCoaches() {
    return this.http.get<ServiceCoachData>('http://elevel-001-site1.btempurl.com/api/User/coaches');
  }

  updateCoachTest(data: TestData, testID: number) {
    return this.http.put<ServiceTestData>(
      `http://elevel-001-site1.btempurl.com/api/Test/forAdmin${testID}`,
      data,
    );
  }
}
