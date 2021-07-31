import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStoreService } from '../services/store/auth-store.service';
import { Route } from '../../constants/route-constant';
import { LocalStorageService } from '../services/local-storage.service';
import { UserResponseType } from '../../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
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
      this.router.navigate([Route.home]);
      return false;
    }
    const token = this.localStorageService.getAccessToken();
    if (token) {
      if (true) {
        this.router.navigate([Route.home]);
        return false;
      }
    }
    return true;
  }
}
