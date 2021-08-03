import { concatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { TestHttpService } from './test-http.service';
import { Test } from '../../../interfaces/test';
import { AuthStoreService } from '../../store/auth-store.service';

@Injectable({
  providedIn: 'root',
})
export class TestStoreService {
  testSubject$ = new BehaviorSubject<Test[] | null>(null);

  testResults$ = this.testSubject$.asObservable();

  private set testResults(testResults: Test[]) {
    this.testSubject$.next(testResults);
  }

  constructor(
    private testHttpService: TestHttpService,
    private authStoreService: AuthStoreService,
  ) {}

  setTestResults(): void {
    this.authStoreService.activeUser$
      .pipe(concatMap((user) => this.testHttpService.getTests(user !== null ? user.id : 0)))
      .subscribe({
        next: (res) => {
          this.testResults = [...res];
        },
      });
  }
}
