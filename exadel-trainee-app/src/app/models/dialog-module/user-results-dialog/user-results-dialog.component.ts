import { Component, OnInit } from '@angular/core';
import { Test } from '../../../interfaces/test';
import { results } from '../../../../constants/mock-test-data';
import { User } from '../../../interfaces/user';
import { user } from '../../../../constants/mock-user-data';

@Component({
  selector: 'app-user-results-dialog',
  templateUrl: './user-results-dialog.component.html',
  styleUrls: ['./user-results-dialog.component.scss'],
})
export class UserResultsDialogComponent implements OnInit {
  user!: User;

  results!: Test[];

  ngOnInit() {
    this.results = results;
    this.user = { ...user };
  }

  onAssignBtnClick(): void {}
}
