import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { Test } from '../../../interfaces/test';
import { results } from '../../../../constants/mock-test-data';
import { User } from '../../../interfaces/user';
import { user } from '../../../../constants/mock-user-data';
import { UserRole } from '../../../../constants/data-constants';

@Component({
  selector: 'app-user-results-dialog',
  templateUrl: './user-results-dialog.component.html',
  styleUrls: ['./user-results-dialog.component.scss'],
})
export class UserResultsDialogComponent implements OnInit {
  user: User = {
    id: 1,
    firstName: 'Сальвадор',
    lastName: 'Бананович',
    email: 'salsa@mail.com',
    role: UserRole.Coach,
    userPhoto: '',
  };

  isClicked = false;

  constructor(
    public dialogRef: MatDialogRef<UserResultsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) {}

  results!: Test[];

  ngOnInit() {
    this.results = results;
    this.user = { ...user, ...this.data };
  }

  onAssignBtnClick(): void {
    this.isClicked = true;
  }
}
