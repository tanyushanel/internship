import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';
import { TestResult, TestContent } from '../../interfaces/test';
import { TestHttpService } from '../test-http.service';
import { AuthStoreService } from './auth-store.service';
import { Level } from '../../constants/data-constants';

@Injectable({
  providedIn: 'root',
})
export class TestStoreService {
  allTestsSubject$ = new BehaviorSubject<TestResult[] | null>(null);

  testSubject$ = new BehaviorSubject<TestContent | null>(null);

  allTests$ = this.allTestsSubject$.asObservable();

  test$ = this.testSubject$.asObservable();

  selectedLevel!: Level;

  private set test(test: TestContent) {
    this.testSubject$.next(test);
  }

  private set allTests(allTests: TestResult[]) {
    this.allTestsSubject$.next(allTests);
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

  createTestContent(): void {
    this.testHttpService.createTest(this.selectedLevel).subscribe({
      next: (test) => {
        this.test = { ...test };
      },
    });
  }

  createAssignedTestContent(testId: string): void {
    this.testHttpService.createAssignedTest(this.selectedLevel, testId).subscribe({
      next: (test) => {
        this.test = { ...test };
      },
    });
  }
}
