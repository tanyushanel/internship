import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WarningDialogComponent } from './warning-dialog/warning-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'exadel-trainee-app';

  constructor(public dialog: MatDialog) {}

  openWarningDialog(): void {
    this.dialog.open(WarningDialogComponent, {
      width: '35rem',
    });
  }
}
