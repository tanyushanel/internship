import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Level } from 'src/app/constants/data-constants';
import { Route } from 'src/app/constants/route-constant';
import { TestResult } from '../../interfaces/test';
import { TestStoreService } from '../../services/store/test-store.service';
import { UserProfileService } from './user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  results$: Observable<TestResult[] | undefined> = this.testStoreService.testResults$;

  assignedTest = this.userProfileService.assignedTest;

  levels = [...Object.values(Level)];

  isDisabledTime = false;

  selectedLevel!: Level;

  deadLine = this.userProfileService.deadLine;

  now = this.userProfileService.now;

  lastPassTime = this.userProfileService.lastPassTime;

  testId: string | undefined = '';

  disableGap = 0;

  constructor(
    private router: Router,
    private testStoreService: TestStoreService,
    private userProfileService: UserProfileService,
  ) {}

  ngOnInit(): void {
    this.userProfileService.isDisabledTimeSubject$.subscribe({
      next: (res) => (this.isDisabledTime = res),
    });

    this.userProfileService.disableGap$.subscribe({
      next: (res) => (this.disableGap = Math.trunc(res)),
    });

    this.testStoreService.getAll();
    this.userProfileService.checkIfDisabled();
  }

  onStartButtonClick(level: Level): void {
    this.isDisabledTime = true;

    this.testStoreService.selectLevel(level);

    if (this.assignedTest) {
      this.router.navigate([Route.test, { id: this.assignedTest.id }]);
    } else this.router.navigate([Route.test]);
  }
}
