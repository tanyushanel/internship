import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { concatMap, filter } from 'rxjs/operators';
import { TestHttpService } from './test-http.service';
import { Test } from '../../../interfaces/test';
import { AuthStoreService } from '../../store/auth-store.service';
import { Level } from '../../../../constants/data-constants';

@Injectable({
  providedIn: 'root',
})
export class TestStoreService {
  resultsSubject$ = new BehaviorSubject<Test[] | null>(null);

  testSubject$ = new BehaviorSubject<Test | null>(null);

  testResults$ = this.resultsSubject$.asObservable();

  test$ = this.testSubject$.asObservable();

  private set test(test: Test) {
    this.testSubject$.next(test);
  }

  private set testResults(testResults: Test[]) {
    this.resultsSubject$.next(testResults);
  }

  selectedLevel!: Level;

  constructor(
    private testHttpService: TestHttpService,
    private authStoreService: AuthStoreService,
  ) {}

  getTestResults(): void {
    this.authStoreService.activeUser$
      .pipe(
        concatMap((user) => this.testHttpService.getTestsObservable(user !== null ? user.id : 0)),
      )
      .subscribe({
        next: (res) => {
          this.testResults = [...res];
        },
      });
  }

  getTest(): void {
    this.testHttpService.createTestObservable(this.selectedLevel).subscribe({
      next: (test) => {
        this.test = { ...test };
      },
    });
  }
}
