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
  results$: Observable<TestResult[] | undefined> = this.testStoreService.results$;

  assignedTests$: Observable<TestResult[] | undefined> = this.testStoreService.assignedTests$;

  levels = [...Object.values(Level)];

  isStarted = false;

  selectedLevel!: Level;

  deadLine: string | null = '';

  testId: string | null = '';

  constructor(private router: Router, private testStoreService: TestStoreService) {}

  ngOnInit(): void {
    this.testStoreService.getAll();

    this.assignedTests$.pipe(map((arr) => (arr ? arr[0].assignmentEndDate : null))).subscribe({
      next: (date) => (this.deadLine = date),
    });
  }

  onStartButtonClick(level: Level): void {
    this.isStarted = true;
    this.testStoreService.selectLevel(level);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([Route.test]);
    });
  }

  onStartAssignedButtonClick(
    level: Level,
    assignedTests?: Observable<TestResult[] | undefined>,
  ): void {
    this.isStarted = true;
    this.testStoreService.selectLevel(level);

    assignedTests?.pipe(map((arr) => (arr ? arr[0].id : null))).subscribe({
      next: (str) => (this.testId = str),
    });

    if (this.testId) {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([Route.test, { id: this.testId }]);
      });
    } else {
      console.error('TestId is null and navigation is unavailable');
    }
  }
}
