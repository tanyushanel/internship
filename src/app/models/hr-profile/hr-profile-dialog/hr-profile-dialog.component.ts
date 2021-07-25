import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-hr-profile-dialog',
  templateUrl: './hr-profile-dialog.component.html',
  styleUrls: ['./hr-profile-dialog.component.scss'],
})
export class HrProfileDialogComponent {
  currentDay = new Date();

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDate();
    return day > this.currentDay.getDate();
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
