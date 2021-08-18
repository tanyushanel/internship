/* eslint-disable no-param-reassign */
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, Subject, Subscription, timer } from 'rxjs';
import { concatMap, finalize, map, take, takeWhile, tap } from 'rxjs/operators';
import { Level } from '../../constants/data-constants';
import { TestContent, TestResult, TestSubmit } from '../../interfaces/test';
import { TestHttpService } from '../test-http.service';
import { AuthStoreService } from './auth-store.service';

@Injectable({
  providedIn: 'root',
})
export class TestStoreService {
  public allTestsSubject$ = new BehaviorSubject<TestResult[] | null>(null);

  allTests$ = this.allTestsSubject$.asObservable();

  public submitTestSubject$ = new Subject<TestSubmit | null>();

  submitTestBody$ = this.submitTestSubject$.asObservable();

  public testSubject$ = new Subject<TestContent | null>();

  test$ = this.testSubject$.asObservable();

  testResults$: Observable<TestResult[] | undefined> = this.allTests$.pipe(
    map((results) => results?.filter((result) => result && result.testPassingDate)),
  );

  assignedTests$: Observable<TestResult[] | undefined> = this.allTests$.pipe(
    map((tests) =>
      tests?.filter((test) => !test.level && new Date(test.assignmentEndDate) >= new Date()),
    ),
  );

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

  private set submitTestBody(body: TestSubmit) {
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

  testSubmit(grammar: string[], listening: string[], writing: string, speaking: string): void {
    this.testHttpService.finishTest(this.testId, grammar, listening, writing, speaking).subscribe({
      next: (request) => {
        this.submitTestBody = {
          ...request,
          id: this.testId,
          grammarAnswers: grammar,
          auditionAnswers: listening,
          essayAnswer: writing,
          speakingAnswerReference: speaking,
        };

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
    const obs = timer(0, interval).pipe(
      takeWhile(() => counter > 0),
      tap(() => (counter -= 1)),
    );

    return obs.subscribe(() => {
      if (counter === 0) func();
      return (this.timerValue = counter);
    });
  }
}
