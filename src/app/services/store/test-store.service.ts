import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { concatMap, map, take } from 'rxjs/operators';
import { Level } from '../../constants/data-constants';
import { TestContent, TestResult } from '../../interfaces/test';
import { TestHttpService } from '../test-http.service';
import { AuthStoreService } from './auth-store.service';

@Injectable({
  providedIn: 'root',
})
export class TestStoreService {
  public allTestsSubject$ = new BehaviorSubject<TestResult[] | null>(null);

  allTests$ = this.allTestsSubject$.asObservable();

  public resultsSubject$ = new BehaviorSubject<TestResult[] | null>(null);

  testResults$ = this.resultsSubject$.asObservable();

  public testSubject$ = new BehaviorSubject<TestContent | null>(null);

  test$ = this.testSubject$.asObservable();

  results$: Observable<TestResult[] | undefined> = this.allTests$.pipe(
    map((results) => results?.filter((result) => result && result.testPassingDate)),
  );

  assignedTests$: Observable<TestResult[] | undefined> = this.allTests$.pipe(
    map((tests) =>
      tests?.filter((test) => !test.level && new Date(test.assignmentEndDate) >= new Date()),
    ),
  );

  selectedLevel!: Level;

  private set test(test: TestContent) {
    this.testSubject$.next(test);
  }

  private set allTests(allTests: TestResult[]) {
    this.allTestsSubject$.next(allTests);
  }

  private set testResults(tests: TestResult[]) {
    this.allTestsSubject$.next(tests);
  }

  constructor(
    private testHttpService: TestHttpService,
    private authStoreService: AuthStoreService,
  ) {}

  selectLevel(selected: Level): void {
    this.selectedLevel = selected;
  }

  getTestResults(): void {
    this.authStoreService.activeUser$
      .pipe(
        take(1),
        concatMap((user) => this.testHttpService.getResults(user !== null ? user.userId : '')),
      )
      .subscribe({
        next: (res) => {
          this.allTests = [...res];
        },
      });
  }

  getAll(): void {
    this.authStoreService.activeUser$
      .pipe(
        take(1),
        concatMap((user) => this.testHttpService.getAllTests(user !== null ? user.userId : '')),
      )
      .subscribe({
        next: (res) => {
          this.allTests = [...res];
        },
      });
  }

  getAllUserResults(row: string): void {
    this.testHttpService.getAllResults(row).subscribe({
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

  createAssignedTestContent(testId: string): void {
    this.testHttpService.startAssignedTest(this.selectedLevel, testId).subscribe({
      next: (test) => {
        this.test = { ...test };
      },
    });
  }
}
