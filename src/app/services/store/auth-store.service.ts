import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthHttpService } from '../auth-http.service';
import { SignIn, UserResponseType, UserToken } from '../../interfaces/user.interfaces';
import { ErrorStoreService } from './error-store.service';
import { ErrorType } from '../../interfaces/error';
import { Route } from '../../constants/route-constant';
import { LocalStorageService } from '../local-storage.service';
import { parseJwt } from '../../helpers/perserJWT';

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
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router,
  ) {}

  get user(): UserResponseType | null {
    return this.userSubject$.getValue();
  }

  private set user(user: UserResponseType | null) {
    this.userSubject$.next(user);
  }

  signIn(signInModel: SignIn): void {
    this.authHttpService.signIn(signInModel).subscribe({
      next: (user) => {
        if (user.email === null) {
          this.errorStoreService.setError({
            type: ErrorType.login,
            message: user.message,
            time: Date.now(),
          });
          return;
        }
        this.localStorageService.setAccessToken(<string>user.token);
        this.user = { ...user };
        this.router.navigate([Route.home]);
      },
      error: (e: Error) => {
        this.errorStoreService.setError({
          type: ErrorType.login,
          message: e.message,
          time: Date.now(),
        });
      },
    });
  }

  getUser() {
    return this.authHttpService.getUser().subscribe({
      next: (user) => {
        this.user = { ...user };
      },
    });
  }

  signOut(): void {
    this.user = null;
    this.localStorageService.clearAccessToken();
    this.router.navigate([Route.login]);
  }

  checkValidToken(token: string): boolean {
    try {
      const savedUser = parseJwt<UserToken>(token);
      return savedUser.exp * 1000 > Date.now();
    } catch (e) {
      return false;
    }
  }
}
