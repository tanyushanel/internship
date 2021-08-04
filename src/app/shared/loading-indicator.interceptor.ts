import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Observable, PartialObserver } from 'rxjs';
import { LoadingIndicatorService } from '../services/loading-indicator.service';

@Injectable({
  providedIn: 'root',
})
export class LoadingIndicatorInterceptor implements HttpInterceptor {
  constructor(private readonly loadingIndicatorService: LoadingIndicatorService) {}

  intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
    this.loadingIndicatorService.start();
    return next.handle(req).pipe(finalize(() => this.loadingIndicatorService.stop()));
  }
}
