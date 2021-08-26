import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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

  isDisabledTimeSubject$ = new Subject<boolean>();

  isDisabledTime$ = this.isDisabledTimeSubject$.asObservable();

  disableGapSubject$ = new Subject<number>();

  disableGap$ = this.disableGapSubject$.asObservable();

  now = new Date();

  set isDisabled(isDisabled: boolean) {
    this.isDisabledTimeSubject$.next(isDisabled);
  }

  set disableGap(numb: number) {
    this.disableGapSubject$.next(numb);
  }

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
      .subscribe((test) => {
        if (test) {
          this.lastPassTime = new Date(test[0].testPassingDate);
          const dg = (+this.now - +this.lastPassTime) / 3600000;
          this.disableGap = dg;
          if (dg > 24) {
            this.isDisabled = false;
          } else {
            this.isDisabled = true;
          }
        }
      });
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
  }
}
