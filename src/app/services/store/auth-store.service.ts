import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthHttpService } from '../auth-http.service';
import { UserResponseType } from '../../../interfaces/user.interfaces';
import { ErrorStoreService } from './error-store.service';
import { SignIn } from '../../interfaces/user';
import { Route } from '../../../constants/route-constant';
import { LocalStorageService } from '../local-storage.service';

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
        this.user = { ...user };
        this.localStorageService.setAccessToken(<string>this.user.token);
        this.router.navigate([Route.home]);
      },
      error: (e: Error) => {
        this.errorStoreService.setError({
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
  //
  // getUser() {
  //   return this.authHttpService.getUser().pipe(
  //     map((user) => {
  //       this.user = { ...user };
  //     }),
  //   );
  // }

  signOut(): void {
    this.user = null;
    this.localStorageService.clearAccessToken();
    this.router.navigate([Route.login]);
  }
}
