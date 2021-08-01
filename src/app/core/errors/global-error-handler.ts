import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { ErrorStoreService } from '../../services/store/error-store.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private zone: NgZone, private errorService: ErrorStoreService) {}

  handleError(error: Error) {
    console.error(error);
    this.zone.run(() => this.errorService.errorHandler());
  }
}
