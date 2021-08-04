import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, skip } from 'rxjs/operators';
import { AuthStoreService } from '../services/store/auth-store.service';
import { Route } from '../../constants/route-constant';
import { LocalStorageService } from '../services/local-storage.service';
import { UserResponseType } from '../../interfaces/user.interfaces';
import { isRoleExist } from '../helpers/check-role';
import { parseJwt } from '../helpers/perserJWT';

export interface Token {
  aud: string;
  email: string;
  exp: number;
  iss: string;
  jti: string;
  roles: string;
  sub: string;
  uid: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly localStorageService: LocalStorageService,
    public readonly authService: AuthStoreService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {
    const activeUser: UserResponseType | null = this.authService.user;
    if (activeUser) {
      return isRoleExist(route, activeUser.roles[0]);
    }
    const token = this.localStorageService.getAccessToken();

    if (token) {
      const expireToken: Token = parseJwt(token);
      if (expireToken.exp * 1000 > Date.now()) {
        this.authService.getUser();
        return this.authService.activeUser$.pipe(
          skip(1),
          map((user) => {
            if (user) {
              return isRoleExist(route, user.roles[0]);
            }
            return false;
          }),
        );
      }
      this.localStorageService.clearAccessToken();
    }
    this.router.navigate([Route.login]);
    return false;
  }
}
