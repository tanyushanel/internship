import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorModel } from '../../interfaces/error';
import { ErrorDialogComponent } from '../../shared/errors/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ErrorStoreService {
  private readonly errorSubject$ = new BehaviorSubject<ErrorModel | null>(null);

  readonly error$ = this.errorSubject$.asObservable();

  constructor(private snackBar: MatSnackBar) {}

  private get error(): ErrorModel | null {
    return this.errorSubject$.getValue();
  }

  private set error(error: ErrorModel | null) {
    this.errorSubject$.next(error);
  }

  setError(error: ErrorModel): void {
    this.error = { ...error };
  }

  errorHandler() {
    this.snackBar.openFromComponent(ErrorDialogComponent, {
      panelClass: ['red-snackbar'],
      duration: 2000,
    });
  }
}
