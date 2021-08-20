import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ServiceCoachData,
  ServiceTestData,
  TestData,
  UpdateCoachesData,
} from 'src/interfaces/admin-profile-intarfaces';

@Injectable({
  providedIn: 'root',
})
export class AdminHttpService {
  constructor(private readonly http: HttpClient) {}

  options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAssignedAdminTests() {
    return this.http.get<ServiceTestData>(
      'http://elevel-001-site1.btempurl.com/api/Test/forAdmin?IsAssigned=true',
    );
  }

  getNotAssignedAdminTests() {
    return this.http.get<ServiceTestData>('http://elevel-001-site1.btempurl.com/api/Test/forAdmin');
  }

  getAdminCoaches() {
    return this.http.get<ServiceCoachData>('http://elevel-001-site1.btempurl.com/api/User/coaches');
  }

  updateCoachTest(data: UpdateCoachesData, testID: number) {
    return this.http.put<TestData>(
      `http://elevel-001-site1.btempurl.com/api/Test/${testID}/assignForCoach`,
      data,
      this.options,
    );
  }
}
