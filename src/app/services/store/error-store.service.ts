import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ErrorModel } from '../../interfaces/error';

@Injectable({
  providedIn: 'root',
})
export class ErrorStoreService {
  private readonly errorSubject$ = new BehaviorSubject<ErrorModel | null>(null);

  readonly error$ = this.errorSubject$.asObservable();

  private get error(): ErrorModel | null {
    return this.errorSubject$.getValue();
  }

  private set error(error: ErrorModel | null) {
    this.errorSubject$.next(error);
  }

  setError(error: ErrorModel): void {
    this.error = { ...error };
  }
}
