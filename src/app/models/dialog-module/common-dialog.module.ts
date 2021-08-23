import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserResultsModule } from '../../components/user-results-table/user-results.module';
import { AngularMaterialCommonModule } from '../angular-material-common.module';
import { FinishModalDialogComponent } from './finish-modal-dialog/finish-modal-dialog.component';

import { UserResultsDialogComponent } from './user-results-dialog/user-results-dialog.component';

@NgModule({
  declarations: [UserResultsDialogComponent, FinishModalDialogComponent],
  imports: [CommonModule, AngularMaterialCommonModule, UserResultsModule],
  exports: [UserResultsDialogComponent, FinishModalDialogComponent],
})
export class CommonDialogModule {}
