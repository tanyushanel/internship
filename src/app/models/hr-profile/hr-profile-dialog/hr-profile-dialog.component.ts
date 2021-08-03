import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PostHttpService } from '../services/post-http.service';

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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private readonly postHttpService: PostHttpService,
  ) {}

  assignTest() {
    this.postHttpService
      .assignTest({
        level: 1,
        assignmentEndDate: new Date().toString(),
        uid: '48687f38-7020-4058-3b04-08d951ef9547',
        priority: true,
      })
      .subscribe();
  }
}
