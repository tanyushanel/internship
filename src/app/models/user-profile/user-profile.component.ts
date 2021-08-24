import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Level } from 'src/app/constants/data-constants';
import { Route } from 'src/app/constants/route-constant';
import { TestResult } from '../../interfaces/test';
import { TestStoreService } from '../../services/store/test-store.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  results$: Observable<TestResult[] | undefined> = this.testStoreService.testResults$;

  assignedTests$: Observable<TestResult[] | null> = this.testStoreService.assignedTests$;

  assignedTest: TestResult | undefined;

  levels = [...Object.values(Level)];

  isDisabledTime = false;

  selectedLevel!: Level;

  deadLine: string | undefined = '';

  now = new Date().toLocaleDateString();

  testId: string | undefined = '';

  constructor(private router: Router, private testStoreService: TestStoreService) {}

  ngOnInit(): void {
    this.testStoreService.getAll();

    const chooseFirst = this.assignedTests$.pipe(map((arr) => (arr?.length ? arr[0] : undefined)));
    chooseFirst.subscribe((test) => {
      this.assignedTest = test;
      this.deadLine = test?.assignmentEndDate;
    });
  }

  onStartButtonClick(level: Level): void {
    this.isDisabledTime = true;
    this.testStoreService.selectLevel(level);

    this.router.navigate([Route.test]);
  }

  onStartAssignedButtonClick(level: Level): void {
    this.isDisabledTime = true;
    this.testStoreService.selectLevel(level);

    if (this.assignedTest && this.deadLine) {
      this.router.navigate([Route.test]);
    }
  }
}
