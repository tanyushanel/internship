import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-coach-profile-dialog',
  templateUrl: './coach-profile-dialog.component.html',
  styleUrls: ['./coach-profile-dialog.component.scss'],
})
export class CoachProfileDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
