import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Level } from 'src/app/constants/data-constants';
import { TestStoreService } from 'src/app/services/store/test-store.service';
import { user } from '../../../constants/mock-user-data';
import { TestResult } from '../../../interfaces/test';
import { GetHrUser } from '../../../interfaces/user.interfaces';

@Component({
  selector: 'app-user-results-dialog',
  templateUrl: './user-results-dialog.component.html',
  styleUrls: ['./user-results-dialog.component.scss'],
})
export class UserResultsDialogComponent implements OnInit {
  @Input() user!: GetHrUser;

  results$: Observable<TestResult[] | undefined> = this.testStoreService.testResults$;

  levels = [...Object.values(Level)];

  isClicked = false;

  results: TestResult[] = [];

  get testsCount() {
    return this.results.length;
  }

  constructor(
    private testStoreService: TestStoreService,
    public dialogRef: MatDialogRef<UserResultsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GetHrUser,
  ) {}

  ngOnInit() {
    this.user = { ...user, ...this.data };
  }

  onAssignBtnClick(): void {
    this.isClicked = true;
  }
}
