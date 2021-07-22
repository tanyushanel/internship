import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ErrorStoreService } from '../services/store/error-store.service';
import { AuthStoreService } from '../services/store/auth-store.service';

@Injectable()
export class AuthInterseptor implements HttpInterceptor {
  private readonly token: string | null = localStorage.getItem('token');

  constructor(
    private auth: AuthStoreService,
    private readonly errorStoreService: ErrorStoreService,
    private readonly router: Router,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request.url);
    // eslint-disable-next-line no-param-reassign
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    return next.handle(request).pipe(
      // @ts-ignore
      catchError((e) => {
        this.errorStoreService.setError({
          message: e.message,
          time: Date.now(),
        });
        this.auth.signOut();
        this.router.navigate(['']);
      }),
    );
  }
}
