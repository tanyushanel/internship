import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserResultsDialogComponent } from './user-results-dialog/user-results-dialog.component';

@NgModule({
  declarations: [UserResultsDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatCardModule],
  exports: [UserResultsDialogComponent],
})
export class CommonDialogModule {}
