import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserResultsDialogComponent } from './user-results-dialog/user-results-dialog.component';
import { AngularMaterialCommonModule } from '../angular-material-common.module';
import { UserResultsModule } from '../../components/user-results-table/user-results.module';

@NgModule({
  declarations: [UserResultsDialogComponent],
  imports: [CommonModule, AngularMaterialCommonModule, UserResultsModule],
  exports: [UserResultsDialogComponent],
})
export class CommonDialogModule {}
