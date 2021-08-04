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
        assignmentEndDate: '2021-08-04T19:13:45.895Z',
        userId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        priority: true,
      })
      .subscribe();
  }
}
