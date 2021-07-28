import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly token: string | null = localStorage.getItem('token');

  intercept(request: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
    const clone = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    return next.handle(clone);
  }
}
