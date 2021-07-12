import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserResultsDialogComponent } from '../dialog-module/user-results-dialog/user-results-dialog.component';

@Component({
  selector: 'app-hr-profile',
  templateUrl: './hr-profile.component.html',
  styleUrls: ['./hr-profile.component.scss'],
})
export class HrProfileComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  onOpenUserResultsDialog(): void {
    this.dialog.open(UserResultsDialogComponent, {
      width: '35rem',
    });
  }

  ngOnInit(): void {}
}
