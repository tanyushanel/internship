import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ApiAssignTest } from 'src/app/interfaces/user.interfaces';
import { PostHttpService } from '../services/post-http.service';

@Component({
  selector: 'app-hr-profile-dialog',
  templateUrl: './hr-profile-dialog.component.html',
  styleUrls: ['./hr-profile-dialog.component.scss'],
})
export class HrProfileDialogComponent {
  assignmentEndDate = new Date();

  priority = false;

  currentDay = new Date();

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDate();
    return day > this.currentDay.getDate();
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ApiAssignTest,
    private readonly postHttpService: PostHttpService,
  ) {}

  assignTestUser() {
    this.postHttpService
      .assignTest({
        assignmentEndDate: this.assignmentEndDate.toISOString(),
        userId: this.data.userId,
        priority: this.priority,
      })
      .subscribe();
  }
}
