import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, Subject, Subscription, timer } from 'rxjs';
import { concatMap, map, take, takeWhile, tap, filter } from 'rxjs/operators';
import { Level } from '../../constants/data-constants';
import { SubmitTestResponse, TestContent, TestResult } from '../../interfaces/test';
import { TestHttpService } from '../test-http.service';
import { AuthStoreService } from './auth-store.service';

@Injectable({
  providedIn: 'root',
})
export class TestStoreService {
  public allTestsSubject$ = new BehaviorSubject<TestResult[] | null>(null);

  allTests$ = this.allTestsSubject$.asObservable();

  public submitTestSubject$ = new Subject<SubmitTestResponse>();

  submitTestBody$ = this.submitTestSubject$.asObservable();

  public testSubject$ = new Subject<TestContent>();

  test$ = this.testSubject$.asObservable();

  testResults$: Observable<TestResult[] | undefined> = this.allTests$.pipe(
    map((results) => results?.filter((result) => result && result.testPassingDate)),
  );

  public assignedTestsSubject$ = new BehaviorSubject<TestResult[] | null>(null);

  assignedTests$ = this.assignedTestsSubject$.asObservable();

  public timerSubject$ = new BehaviorSubject<number>(0);

  timerValue$ = this.timerSubject$.asObservable();

  selectedLevel!: Level;

  testId = '';

  private set test(test: TestContent) {
    this.testSubject$.next(test);
  }

  private set allTests(allTests: TestResult[]) {
    this.allTestsSubject$.next(allTests);
  }

  private set testResults(testResults: TestResult[]) {
    this.allTestsSubject$.next(testResults);
  }

  private set assignedTestsResults(testResults: TestResult[]) {
    this.assignedTestsSubject$.next(testResults);
  }

  private set submitTestBody(body: SubmitTestResponse) {
    this.submitTestSubject$.next(body);
  }

  private set timerValue(timerValue: number) {
    this.timerSubject$.next(timerValue);
  }

  constructor(
    private testHttpService: TestHttpService,
    private authStoreService: AuthStoreService,
    private snackbar: MatSnackBar,
  ) {}

  getTestId(): void {
    this.test$.subscribe((test) => {
      if (test) {
        this.testId = test.id;
      }
    });
  }

  selectLevel(selected: Level): void {
    this.selectedLevel = selected;
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

  getAssignedTestById(): void {
    this.testHttpService.getAssignedTest(this.testId).subscribe({
      next: (res) => {
        this.assignedTestsResults = [...res];
      },
    });
  }

  getAssignedTest(): void {
    this.authStoreService.activeUser$
      .pipe(
        take(1),
        concatMap((user) =>
          this.testHttpService.getAssignedTestByLevel(user !== null ? user.userId : ''),
        ),
      )
      .subscribe({
        next: (res) => {
          this.assignedTestsResults = [...res];
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

  testSubmit(
    id: string,
    grammar: string[],
    listening: string[],
    writing: string,
    speaking: string,
  ): void {
    this.testHttpService.finishTest(id, grammar, listening, writing, speaking).subscribe({
      next: (responce) => {
        this.submitTestBody = responce;

        this.snackbar.open('Test was successfully submitted', 'Close', {
          verticalPosition: 'bottom',
          duration: 2000,
          panelClass: 'success',
        });
      },

      error: () => {
        this.snackbar.open('Something went wrong', 'Close', {
          verticalPosition: 'bottom',
          duration: 2000,
          panelClass: 'error',
        });
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

  timer(counter: number, interval: number, func: () => void): Subscription {
    let timeLast = counter;
    const obs = timer(0, interval).pipe(
      takeWhile(() => timeLast > 0),
      tap(() => (timeLast -= 1)),
    );

    return obs.subscribe(() => {
      if (timeLast === 0) func();
      return (this.timerValue = timeLast);
    });
  }
}
