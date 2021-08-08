import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BASE_API_URL } from '../../../constants/route-constant';

export interface CoachTest {
  id: string;
  level: string;
  isChecked: boolean;
  isHigh: boolean;
  date: string;
}

interface GetCoachTests {
  results: CoachTest[];
}

@Injectable({
  providedIn: 'root',
})
export class GetCoachTestsHttpService {
  constructor(private http: HttpClient) {}

  getHighPriorityCoachTests(): Observable<CoachTest[]> {
    return this.http
      .get<GetCoachTests>(`${BASE_API_URL}/Test/forCoach?IsChecked=false&Priority=true`)
      .pipe(
        map((res) => {
          return res.results.filter((r) => r.id !== null);
        }),
      );
  }

  getCheckedCoachTests(): Observable<CoachTest[]> {
    return this.http.get<GetCoachTests>(`${BASE_API_URL}/Test/forCoach?IsChecked=true`).pipe(
      map((res) => {
        return res.results.filter((r) => r.id !== null);
      }),
    );
  }

  getUncheckedCoachTests(): Observable<CoachTest[]> {
    return this.http.get<GetCoachTests>(`${BASE_API_URL}/Test/forCoach?IsChecked=false`).pipe(
      map((res) => {
        return res.results.filter((r) => r.id !== null);
      }),
    );
  }
}
