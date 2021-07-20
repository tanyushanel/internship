import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthHttpService } from '../auth-http.service';
import { UserResponseType } from '../../../interfaces/user.interfaces';
import { ErrorStoreService } from './error-store.service';
import { SignIn } from '../../interfaces/user';
import { Route } from '../../../constants/route-constant';
import { DataStoreService } from './data-store.service';

@Injectable({
  providedIn: 'root',
})
export class AuthStoreService {
  private readonly initialState = this.dataUser.getUserDataFromStorage();

  private readonly userSubject$ = new BehaviorSubject<UserResponseType>(this.initialState);

  readonly activeUser$ = this.userSubject$.asObservable();

  readonly isSignIn$ = this.activeUser$.pipe(map((user) => !!user));

  constructor(
    private readonly authHttpService: AuthHttpService,
    private readonly errorStoreService: ErrorStoreService,
    private readonly router: Router,
    private dataUser: DataStoreService,
  ) {
    console.log(this.dataUser, 'dataUser');
  }

  private get user(): UserResponseType | null {
    return this.userSubject$.getValue();
  }

  private set user(user: UserResponseType | null) {
    if (user) {
      this.userSubject$.next(user);
    }
  }

  signIn(signInModel: SignIn): void {
    this.authHttpService.signIn(signInModel).subscribe({
      next: (user) => {
        this.user = { ...user };
        this.setToken(user);
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

  signOut(): void {
    this.user = this.initialState;
    this.setToken(null);
    localStorage.clear();
    this.router.navigate(['/']);
  }

  private setToken(response: UserResponseType | null) {
    if (response) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response));
    } else {
      localStorage.clear();
    }
  }
  //
  // isAuthenticated() {
  //   return !!this.user;
  // }
}
