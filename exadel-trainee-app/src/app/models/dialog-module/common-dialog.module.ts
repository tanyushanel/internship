import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserResultsDialogComponent } from './user-results-dialog/user-results-dialog.component';
import { DialogResultsTableComponent } from './user-results-dialog/dialog-results-table/dialog-results-table.component';
import { AngularMaterialCommonModule } from '../angular-material-common.module';

@NgModule({
  declarations: [UserResultsDialogComponent, DialogResultsTableComponent],
  imports: [CommonModule, AngularMaterialCommonModule],
  exports: [UserResultsDialogComponent, DialogResultsTableComponent],
})
export class CommonDialogModule {}
