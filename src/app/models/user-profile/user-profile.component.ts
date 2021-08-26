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
  results$: Observable<TestResult[] | null> = this.testStoreService.allTests$;

  assignedTest!: TestResult | null;

  levels = [...Object.values(Level)];

  isDisabledTime = false;

  selectedLevel!: Level;

  deadLine!: Date;

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

    this.userProfileService.setDeadline().subscribe((test) => {
      if (test?.length) {
        this.assignedTest = test[0];
        this.deadLine = new Date(test[0].assignmentEndDate);
      } else {
        this.assignedTest = null;
      }
    });

    this.testStoreService.getAll();
    this.userProfileService.setLastPassTime();
  }

  onStartButtonClick(level: Level): void {
    this.isDisabledTime = true;

    this.testStoreService.selectLevel(level);

    if (this.assignedTest) {
      this.router.navigate([Route.test, { id: this.assignedTest.id }]);
    } else this.router.navigate([Route.test]);
  }
}
