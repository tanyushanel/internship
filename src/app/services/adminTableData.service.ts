import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  ServiceCoachData,
  ServiceTestData,
  TestData,
  UpdateCoachesData,
} from 'src/app/interfaces/admin-profile-intarfaces';
import { AdmintableApi, CoachTestApi } from '../constants/route-constant';

@Injectable({
  providedIn: 'root',
})
export class AdminHttpService {
  constructor(private readonly http: HttpClient) {}

  options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAssignedAdminTests() {
    return this.http.get<ServiceTestData>(`${AdmintableApi}forAdmin?IsAssigned=true`);
  }

  getAdminTests() {
    return this.http.get<TestData[]>(`${AdmintableApi}forAdmin`);
  }

  getNotAssignedAdminTests() {
    return this.http.get<ServiceTestData>(`${AdmintableApi}forAdmin`);
  }

  getAdminCoaches() {
    return this.http.get<ServiceCoachData>(CoachTestApi);
  }

  updateCoachTest(data: UpdateCoachesData, testID: number) {
    return this.http.put<TestData>(`${AdmintableApi}${testID}/assignForCoach`, data, this.options);
  }
}
