import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';
import { Test, TestContent } from '../../interfaces/test';
import { TestHttpService } from '../test-http.service';
import { AuthStoreService } from './auth-store.service';
import { Level } from '../../constants/data-constants';

@Injectable({
  providedIn: 'root',
})
export class TestStoreService {
  resultsSubject$ = new BehaviorSubject<Test[] | null>(null);

  testSubject$ = new BehaviorSubject<TestContent | null>(null);

  testResults$ = this.resultsSubject$.asObservable();

  test$ = this.testSubject$.asObservable();

  selectedLevel!: Level;

  private set test(test: TestContent) {
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
        concatMap((user) => this.testHttpService.getResults(user !== null ? user.userId : '')),
      )
      .subscribe({
        next: (res) => {
          this.testResults = [...res];
        },
      });
  }

  createTestContent(): void {
    this.testHttpService.createTest(this.selectedLevel).subscribe({
      next: (test) => {
        this.test = { ...test };
      },
    });
  }
}
