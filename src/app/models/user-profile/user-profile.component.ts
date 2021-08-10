import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
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
  allTests$: Observable<TestResult[] | null> = this.testStoreService.allTests$;

  results$!: Observable<TestResult[] | null | undefined>;

  assignedTests$!: Observable<TestResult[] | null | undefined>;

  levels = [...Object.values(Level)];

  isStarted = false;

  selectedLevel!: Level;

  isAssigned = false;

  constructor(private router: Router, private testStoreService: TestStoreService) {}

  ngOnInit(): void {
    this.testStoreService.getAll();

    this.results$ = this.allTests$.pipe(map((arr) => arr?.filter((i) => i.testPassingDate)));

    this.assignedTests$ = this.allTests$.pipe(
      map((arr) => arr?.filter((i) => !i.testPassingDate && !i.level)),
    );
  }

  onStartButtonClick(level: Level): void {
    this.isStarted = true;
    this.testStoreService.selectLevel(level);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([Route.test]);
    });
  }

  onStartAssignedButtonClick(level: Level): void {
    this.isStarted = true;
    this.testStoreService.selectLevel(level);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([Route.assigned]);
    });
  }
}
