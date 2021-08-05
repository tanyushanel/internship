import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { User } from '../../../interfaces/user';
import { user } from '../../../../constants/mock-user-data';
import { Test } from '../../../interfaces/test';

@Component({
  selector: 'app-user-results-dialog',
  templateUrl: './user-results-dialog.component.html',
  styleUrls: ['./user-results-dialog.component.scss'],
})
export class UserResultsDialogComponent implements OnInit {
  @Input() user!: User;

  isClicked = false;

  results: Test[] = [];

  get testsCount() {
    return this.results.length;
  }

  constructor(
    public dialogRef: MatDialogRef<UserResultsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) {}

  ngOnInit() {
    this.user = { ...user, ...this.data };
  }

  onAssignBtnClick(): void {
    this.isClicked = true;
  }
}
