import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BASE_API_URL } from '../../../../constants/route-constant';

export interface CoachTest {
  id: string;
  level: string;
  isChecked: boolean;
  isHigh: boolean;
  date: Date;
}

interface GetCoachTests {
  tests: CoachTest[];
}

@Injectable({
  providedIn: 'root',
})
export class GetCoachTestsHttpService {
  constructor(private http: HttpClient) {}

  getCoachTests(userID: number): Observable<CoachTest[]> {
    return this.http
      .get<GetCoachTests>(`${BASE_API_URL}/api/Test/forCoach`)
      .pipe(map((res) => res.tests.filter((r) => r.id !== null)));
  }
}
