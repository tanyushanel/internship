import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { Test } from '../../../interfaces/test';
import { CoachTest, GetCoachTestsHttpService } from './get-coach-tests-http.service';
import { TestHttpService } from '../../../services/test/test/test-http.service';
import { AuthStoreService } from '../../../services/store/auth-store.service';

@Injectable({
  providedIn: 'root',
})
export class CoachTestsStoreService {
  coachTestSubject$ = new BehaviorSubject<CoachTest[] | null>(null);

  coachTestResults$ = this.coachTestSubject$.asObservable();

  private set coachTestResults(coachTestResults: CoachTest[]) {
    this.coachTestSubject$.next(coachTestResults);
  }

  constructor(
    private coachTestHttpService: GetCoachTestsHttpService,
    private authStoreService: AuthStoreService,
  ) {}

  getCoachTestResults(): void {
    this.authStoreService.activeUser$
      .pipe(
        concatMap((coach) =>
          this.coachTestHttpService.getCoachTests(coach !== null ? coach.id : 0),
        ),
      )
      .subscribe({
        next: (res) => {
          this.coachTestResults = [...res];
        },
      });
  }
}
