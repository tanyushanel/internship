import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CoachTest, GetCoachTestsHttpService } from './get-coach-tests-http.service';

@Injectable({
  providedIn: 'root',
})
export class CoachTestsStoreService {
  coachTestSubject$ = new BehaviorSubject<CoachTest[] | null>(null);

  coachTestResults$ = this.coachTestSubject$.asObservable();

  constructor(private coachTestHttpService: GetCoachTestsHttpService) {}

  getCoachHighPriorityTestResults(): void {
    this.coachTestHttpService.getHighPriorityCoachTests().subscribe();
  }

  getCoachCheckedTestResults(): void {
    this.coachTestHttpService.getCheckedCoachTests().subscribe();
  }

  getCoachUncheckedTestResults(): void {
    this.coachTestHttpService.getUncheckedCoachTests().subscribe();
  }
}
