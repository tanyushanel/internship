import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';
import { TestResult, TestContent, TestSubmit } from '../../interfaces/test';
import { TestHttpService } from '../test-http.service';
import { AuthStoreService } from './auth-store.service';
import { Level } from '../../constants/data-constants';

@Injectable({
  providedIn: 'root',
})
export class TestStoreService {
  resultsSubject$ = new BehaviorSubject<TestResult[] | null>(null);

  testSubject$ = new BehaviorSubject<TestContent | null>(null);

  requestSubject$ = new BehaviorSubject<TestSubmit | null>(null);

  requestBody$ = this.requestSubject$.asObservable();

  testResults$ = this.resultsSubject$.asObservable();

  test$ = this.testSubject$.asObservable();

  selectedLevel!: Level;

  testId = '';

  private set test(test: TestContent) {
    this.testSubject$.next(test);
  }

  private set testResults(testResults: TestResult[]) {
    this.resultsSubject$.next(testResults);
  }

  private set requestBody(body: TestSubmit) {
    this.requestSubject$.next(body);
  }

  constructor(
    private testHttpService: TestHttpService,
    private authStoreService: AuthStoreService,
  ) {}

  selectLevel(selected: Level): void {
    this.selectedLevel = selected;
  }

  getTestId(): void {
    this.test$.subscribe((test) => {
      if (test) {
        this.testId = test.id;
      }
    });
  }

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

  testSubmit(): void {
    this.testHttpService.finishTest(this.testId).subscribe({
      next: (request) => {
        this.requestBody = { ...request, id: this.testId };
      },
    });
  }
}
