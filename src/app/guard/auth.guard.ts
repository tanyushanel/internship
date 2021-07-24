import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStoreService } from '../services/store/auth-store.service';
import { parseJwt } from '../helper/perserJWT';
import { ErrorStoreService } from '../services/store/error-store.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  savedUser = localStorage.getItem('token') as string;

  activeUser = this.authService.user;

  constructor(
    private readonly userService: AuthStoreService,
    private readonly errorStoreService: ErrorStoreService,

    public readonly authService: AuthStoreService,
    private router: Router,
  ) {}

  checkValidToken(dateExp: number): boolean {
    return dateExp > Date.now();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {
    if (this.activeUser) {
      return route.data.accessRoles.includes(this.activeUser.roles[0]);
    }
    if (this.savedUser) {
      const userActive = parseJwt(this.savedUser);
      const userRoleExist: boolean = route.data.accessRoles.includes(userActive.roles);
      if (userRoleExist && this.checkValidToken(userActive.exp)) {
        return userRoleExist;
      }
      this.authService.getUser();
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
