import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserResultsDialogComponent } from './models/dialog-module/user-results-dialog/user-results-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'exadel-trainee-app';

  constructor(public dialog: MatDialog) {}

  onOpenUserResultsDialog(): void {
    this.dialog.open(UserResultsDialogComponent, {
      width: '35rem',
    });
  }
}
