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

  getSelectedCoach(coachName: string, coachPosition: number): string {
    if (this.dataSource[coachPosition].isAssign) {
      if (coachName == null) {
        return this.dataSource[coachPosition].coach.name;
      }
      return coachName;
    }

    if (coachName == null) {
      return '--';
    }
    return coachName;

    // this.dataSource[this.data.position].isAssign
    //   ? this.data.coach.name == null
    //     ? this.dataSource[this.data.position].coach.name
    //     : this.data.coach.name
    //   : this.data.coach.name == null
    //   ? '--'
    //   : this.data.coach.name;
  }
}
