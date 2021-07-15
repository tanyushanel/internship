import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { UserResultsDialogComponent } from './user-results-dialog/user-results-dialog.component';
import { DialogResultsTableComponent } from './user-results-dialog/dialog-results-table/dialog-results-table.component';

@NgModule({
  declarations: [UserResultsDialogComponent, DialogResultsTableComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatCardModule, MatTableModule],
  exports: [UserResultsDialogComponent],
})
export class CommonDialogModule {}
