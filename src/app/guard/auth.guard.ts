import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthStoreService } from '../services/store/auth-store.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly userService: AuthStoreService,
    public readonly authService: AuthStoreService,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.activeUser$.pipe(
      map((activeUser) => {
        console.log(activeUser, 'Boolean');
        return true;
        if (activeUser) {
          return route.data.includes(activeUser?.roles[0]);
        }
        if (localStorage.getItem('token')) {
          return this.userService.getUser().pipe(
            // todo парсить токен или кэтч

            map((user) => {
              console.log(user, 'Boolean');
              return route.data.includes(user.roles[0]);
            }),
          );
        }
        this.router.navigate(['/']);
        return false;
      }),
    );
  }
}
