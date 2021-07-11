import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { WarningDialogComponent } from './warning-dialog/warning-dialog.component';

@NgModule({
  declarations: [WarningDialogComponent],
  imports: [CommonModule, MatDialogModule],
  exports: [WarningDialogComponent],
})
export class ConfirmDialogModule {}
