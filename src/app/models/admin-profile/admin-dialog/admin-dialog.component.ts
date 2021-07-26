import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MOCK_TEST } from '../../../../mocks/admin-profile-utils.mock';

export interface CoachInfo {
  position: number;
  coach: CoachData;
}

export interface CoachData {
  name: string;
  email: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.scss'],
})
export class AdminDialogComponent implements OnInit {
  dataSource = MOCK_TEST;

  coachControl = new FormControl('', Validators.required);

  constructor(
    public dialogRef: MatDialogRef<AdminDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CoachInfo,
  ) {}

  ngOnInit(): void {}

  getSelectedCoach(coachInfo: string, coachPosition: number, selector: number): string {
    if (this.dataSource[coachPosition].isAssign) {
      if (coachInfo == null) {
        if (selector === 0) {
          return this.dataSource[coachPosition].coach.name;
        }
        if (selector === 1) {
          return this.dataSource[coachPosition].coach.phoneNumber;
        }
        return this.dataSource[coachPosition].coach.email;
      }
      return coachInfo;
    }
    if (coachInfo == null) {
      return '--';
    }
    return coachInfo;
  }
}
