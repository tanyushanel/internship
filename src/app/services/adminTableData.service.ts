import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  ServiceCoachData,
  ServiceTestData,
  TestData,
  UpdateCoachesData,
} from 'src/app/interfaces/admin-profile-intarfaces';
import { map } from 'rxjs/operators';
import { AdmintableApi, CoachTestApi } from '../constants/route-constant';

@Injectable({
  providedIn: 'root',
})
export class AdminHttpService {
  data: any;

  constructor(private readonly http: HttpClient) {}

  options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAssignedAdminTests() {
    return this.http.get<ServiceTestData>(`${AdmintableApi}forAdmin?IsAssigned=true`).pipe(
      map((res) => {
        return res.results;
      }),
    );
  }

  getHighPriorityAdminTests() {
    return this.http.get<ServiceTestData>(`${AdmintableApi}forAdmin`).pipe(
      map((res) => {
        return res.results;
      }),
    );
  }

  getNotAssignedAdminTests() {
    return this.http.get<ServiceTestData>(`${AdmintableApi}forAdmin`).pipe(
      map((res) => {
        return res.results;
      }),
    );
  }

  getAdminCoaches() {
    return this.http.get<ServiceCoachData>(CoachTestApi).pipe(
      map((res) => {
        return res;
      }),
    );
  }

  updateCoachTest(data: UpdateCoachesData, testID: number) {
    return this.http.put<TestData>(`${AdmintableApi}${testID}/assignForCoach`, data, this.options);
  }
}
