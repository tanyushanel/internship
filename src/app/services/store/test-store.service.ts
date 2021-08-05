import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';
import { Test } from '../../interfaces/test';
import { TestHttpService } from '../test-http.service';
import { AuthStoreService } from './auth-store.service';
import { Level } from '../../../constants/data-constants';

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

  constructor(
    private testHttpService: TestHttpService,
    private authStoreService: AuthStoreService,
  ) {}

  getTestResults(): void {
    this.authStoreService.activeUser$
      .pipe(
        take(1),
        concatMap((user) => this.testHttpService.getResults(user !== null ? user.id : 0)),
      )
      .subscribe({
        next: (res) => {
          this.testResults = [...res];
        },
      });
  }

  createTest(selectedLevel: Level): void {
    this.testHttpService.createTest(selectedLevel).subscribe({
      next: (test) => {
        this.test = { ...test };
      },
    });
  }
}
