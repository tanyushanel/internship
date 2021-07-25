import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, skip } from 'rxjs/operators';
import { AuthStoreService } from '../services/store/auth-store.service';
import { parseJwt } from '../helpers/perserJWT';
import { Route } from '../../constants/route-constant';
import { LocalStorageService } from '../services/local-storage.service';
import { UserToken } from '../../interfaces/user.interfaces';
import { isRoleExist } from '../helpers/check-role';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly userService: AuthStoreService,
    public readonly authService: AuthStoreService,
    private router: Router,
  ) {}

  checkValidToken(token: string): boolean {
    try {
      const savedUser = parseJwt<UserToken>(token);
      return savedUser.exp > Date.now();
    } catch (e) {
      return false;
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {
    const token = this.localStorageService.getAccessToken();
    if (token) {
      if (this.checkValidToken(token)) {
        this.authService.getUser();
        return this.userService.activeUser$.pipe(
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
