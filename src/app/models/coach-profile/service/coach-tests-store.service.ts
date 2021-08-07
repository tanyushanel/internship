import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { CoachTest, GetCoachTestsHttpService } from './get-coach-tests-http.service';

@Injectable({
  providedIn: 'root',
})
export class CoachTestsStoreService {
  coachTestSubject$ = new BehaviorSubject<CoachTest[] | null>(null);

  coachTestResults$ = this.coachTestSubject$.asObservable();

  private set coachTestResults(coachTestResults: CoachTest[]) {
    this.coachTestSubject$.next(coachTestResults);
  }

  constructor(private coachTestHttpService: GetCoachTestsHttpService) {}

  getCoachHighPriorityTestResults(): void {
    this.coachTestResults$
      .pipe(concatMap(() => this.coachTestHttpService.getHighPriorityCoachTests()))
      .subscribe({
        next: (res) => {
          this.coachTestResults = [...res];
        },
      });
  }

  getCoachCheckedTestResults(): void {
    this.coachTestResults$
      .pipe(concatMap(() => this.coachTestHttpService.getCheckedCoachTests()))
      .subscribe({
        next: (res) => {
          this.coachTestResults = [...res];
        },
      });
  }

  getCoachUncheckedTestResults(): void {
    this.coachTestResults$
      .pipe(concatMap(() => this.coachTestHttpService.getUncheckedCoachTests()))
      .subscribe({
        next: (res) => {
          this.coachTestResults = [...res];
        },
      });
  }
}
