import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthHttpService } from '../auth-http.service';
import { UserResponseType } from '../../../interfaces/user.interfaces';
import { ErrorStoreService } from './error-store.service';
import { SignIn } from '../../interfaces/user';
import { Route } from '../../../constants/route-constant';

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
        localStorage.setItem('token', <string>this.user.token);
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

  getUser(): Observable<UserResponseType> {
    return this.authHttpService.getUser().pipe(
      map((user) => {
        this.user = { ...user };
        return user;
      }),
    );
  }

  signOut(): void {
    this.user = null;
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
