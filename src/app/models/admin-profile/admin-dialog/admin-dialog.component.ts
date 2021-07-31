import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MOCK_COACH, TestData } from '../../../../mocks/admin-profile-utils.mock';

@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.scss'],
})
export class AdminDialogComponent implements OnInit {
  coaches = MOCK_COACH;

  coachControl = new FormControl('', Validators.required);

  constructor(
    public dialogRef: MatDialogRef<AdminDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TestData,
  ) {}

  ngOnInit(): void {}

  getSelectedCoach(coachInfo: string | null): string | null {
    if (this.data.coach.name === null) {
      return 'Not Assign';
    }
    return coachInfo;
  }
}
