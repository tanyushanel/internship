import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { GlobalErrorHandler } from './global-error-handler';
import { AngularMaterialCommonModule } from '../../models/angular-material-common.module';
import { ErrorDialogComponent } from '../../shared/errors/error-dialog/error-dialog.component';

@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [CommonModule, AngularMaterialCommonModule],

  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
})
export class ErrorHandlerModule {}
