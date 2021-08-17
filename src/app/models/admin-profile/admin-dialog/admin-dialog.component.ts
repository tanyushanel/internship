import { Input, Component, Inject, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminTableStoreService } from 'src/app/services/store/adminTableStore.service';
import { CoachData, ServiceCoachData, TestData } from '../../../../mocks/admin-profile-utils.mock';

@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.scss'],
})
export class AdminDialogComponent implements OnInit {
  coachControl = new FormControl('', Validators.required);

  constructor(
    public dialogRef: MatDialogRef<AdminDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {}

  unselect(): void {
    this.coachControl.reset(null);
    this.data.coach = null;
  }
}
