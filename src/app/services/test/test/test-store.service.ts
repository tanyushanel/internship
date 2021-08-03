import { concatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestHttpService } from './test-http.service';
import { Test } from '../../../interfaces/test';
import { AuthStoreService } from '../../store/auth-store.service';

@Injectable({
  providedIn: 'root',
})
export class TestStoreService {
  constructor(
    private testHttpService: TestHttpService,
    private authStoreService: AuthStoreService,
  ) {}

  getTestResults(): Observable<Test[]> {
    return this.authStoreService.activeUser$.pipe(
      concatMap((user) => this.testHttpService.getTests(user !== null ? user.id : 0)),
    );
  }
}
