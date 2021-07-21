import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../../../interfaces/user';
import { user } from '../../../../constants/mock-user-data';
import { UserRole } from '../../../../constants/data-constants';
import { TestResult } from '../../../interfaces/result';
import { MOCK_TEST_RESULTS } from '../../../../constants/mock-test-results';

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

  length = MOCK_TEST_RESULTS.length;

  constructor(
    public dialogRef: MatDialogRef<UserResultsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) {}

  MOCK_TEST_RESULTS: TestResult[] = [];

  ngOnInit() {
    this.MOCK_TEST_RESULTS = MOCK_TEST_RESULTS;
    this.user = { ...user, ...this.data };
  }

  onAssignBtnClick(): void {
    this.isClicked = true;
  }
}
