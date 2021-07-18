import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthHttpService } from '../auth-http.service';
import { UserResponseType } from '../../../interfaces/user.interfaces';
import { SignIn } from '../../interfaces/user';
import { ErrorStoreService } from './error-store.service';

@Injectable({
  providedIn: 'root',
})
export class AuthStoreService {
  private readonly initialState = null;

  private readonly userSubject$ = new BehaviorSubject<UserResponseType | null>(this.initialState);

  readonly activeUser$ = this.userSubject$.asObservable();

  readonly isSignIn$ = this.activeUser$.pipe(map((user) => !!user));

  constructor(
    private readonly authHttpService: AuthHttpService,
    private readonly errorStoreService: ErrorStoreService,
    private readonly router: Router,
  ) {}

  private get user(): UserResponseType | null {
    return this.userSubject$.getValue();
  }

  private set user(user: UserResponseType | null) {
    this.userSubject$.next(user);
  }

  signIn(signInModel: SignIn): void {
    this.authHttpService.signIn(signInModel).subscribe({
      next: (user) => {
        this.user = { ...user };
        this.router.navigate(['/home']);
      },
      error: (e: Error) => {
        this.errorStoreService.setError({
          message: e.message,
          time: Date.now(),
        });
      },
    });
  }

  signOut(): void {
    this.user = this.initialState;
    this.router.navigate(['/']);
  }
}
