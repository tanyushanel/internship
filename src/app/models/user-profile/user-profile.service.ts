import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { TestResult } from '../../interfaces/test';
import { TestStoreService } from '../../services/store/test-store.service';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  results$: Observable<TestResult[] | null> = this.testStoreService.allTests$;

  assignedTests$: Observable<TestResult[] | null> = this.testStoreService.assignedTests$;

  lastPassTime!: Date;

  isDisabledTimeSubject$ = new Subject<boolean>();

  isDisabledTime$ = this.isDisabledTimeSubject$.asObservable();

  disableGapSubject$ = new Subject<number>();

  disableGap$ = this.disableGapSubject$.asObservable();

  now = new Date();

  set isDisabled(isDisabled: boolean) {
    this.isDisabledTimeSubject$.next(isDisabled);
  }

  set timeLeftToNext(numb: number) {
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
          const timeFromLastPass = (+this.now - +this.lastPassTime) / 3600000;
          this.timeLeftToNext = 24 - timeFromLastPass;
          if (timeFromLastPass > 24) {
            this.isDisabled = false;
          } else {
            this.isDisabled = true;
          }
        }
      });
  }

  setDeadline(): Observable<TestResult[] | null> {
    return this.assignedTests$.pipe(
      map((arr) =>
        arr?.length
          ? arr.filter(
              (test) => new Date(test.assignmentEndDate) > this.now && !test.testPassingDate,
            )
          : null,
      ),
    );
  }
}
