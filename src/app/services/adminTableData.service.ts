import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  ServiceCoachData,
  ServiceTestData,
  TestData,
  UpdateCoachesData,
} from 'src/app/interfaces/admin-profile-intarfaces';
import { map } from 'rxjs/operators';
import { AdmintableApi, BASE_API_URL, CoachTestApi } from '../constants/route-constant';

@Injectable({
  providedIn: 'root',
})
export class AdminHttpService {
  constructor(private readonly http: HttpClient) {}

  data: any;

  options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAssignedAdminTests() {
    this.http.get<TestData[]>(`${AdmintableApi}forAdmin`).subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
    return this.http.get<ServiceTestData>(`${AdmintableApi}forAdmin?IsAssigned=true`).pipe(
      map((res) => {
        return res.results;
      }),
    );
  }

  getAdminTests() {
    return this.http.get<TestData[]>(`${AdmintableApi}forAdmin`).pipe(
      map((res) => {
        return res;
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
        return res.coaches;
      }),
    );
  }

  updateCoachTest(data: UpdateCoachesData, testID: number) {
    return this.http.put<TestData>(`${AdmintableApi}${testID}/assignForCoach`, data, this.options);
  }
}
