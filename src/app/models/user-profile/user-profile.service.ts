import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TestResult } from '../../interfaces/test';
import { TestStoreService } from '../../services/store/test-store.service';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  results$: Observable<TestResult[] | undefined> = this.testStoreService.testResults$;

  assignedTests$: Observable<TestResult[] | null> = this.testStoreService.assignedTests$;

  assignedTest: TestResult | null = null;

  lastPassTime!: Date;

  deadLine!: Date;

  isDisabledTime = false;

  now = new Date();

  constructor(private testStoreService: TestStoreService) {}

  setLastPassTime(): void {
    this.results$
      .pipe(
        map((arr) =>
          arr?.length
            ? arr.sort((a, b) => +new Date(b.testPassingDate) - +new Date(a.testPassingDate))
            : null,
        ),
      )
      .subscribe((test) => (test ? (this.lastPassTime = new Date(test[0].testPassingDate)) : null));
  }

  setDeadline(): void {
    this.assignedTests$
      .pipe(
        map((arr) =>
          arr?.length ? arr.find((test) => new Date(test.assignmentEndDate) > this.now) : null,
        ),
      )
      .subscribe((test) => {
        if (test) {
          this.assignedTest = test;
          this.deadLine = new Date(test.assignmentEndDate);
        }
      });
  }

  checkIfDisabled() {
    this.setLastPassTime();
    this.setDeadline();
    const disableGap = +this.now - +this.lastPassTime;

    if (disableGap > 86400000) {
      this.isDisabledTime = false;
    } else {
      this.isDisabledTime = true;
    }
  }
}
