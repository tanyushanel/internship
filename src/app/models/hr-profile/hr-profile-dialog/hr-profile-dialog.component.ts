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
        assignmentEndDate: '2021-08-20T12:47:10.089Z',
        userId: 'b9408d77-d447-44b6-27cc-08d9574493b2',
        priority: true,
      })
      .subscribe();
  }
}
